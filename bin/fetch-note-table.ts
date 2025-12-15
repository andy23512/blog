import * as cheerio from "cheerio";
import { readFileSync, writeFileSync } from "fs";
import puppeteer from "puppeteer";
import { NoteTableEntry } from "../model/note-table-entry.model";

const config: { noteTableUrl: string } = JSON.parse(
  readFileSync("./config.json", { encoding: "utf8" })
);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractNoteUrlFromGoogleUrl(googleUrl: string): string | null {
  const url = new URL(googleUrl);
  const params = url.searchParams;
  return params.get("q");
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(config.noteTableUrl, { waitUntil: "networkidle2" });
  const iframeSelector = "iframe";
  await page?.waitForSelector("iframe");
  await sleep(5000);
  const iframeElementHandle = await page.$(iframeSelector);
  const iframeContentFrame = await iframeElementHandle?.contentFrame();
  const content = await iframeContentFrame?.evaluate(() => {
    return document.body.innerHTML;
  });
  const $ = cheerio.load(content || "");
  const rows = $("table.waffle > tbody > tr");
  const noteTableData: NoteTableEntry[] = [];
  rows.each((_, row) => {
    const cells = $(row).find("td");
    const category = cells.eq(0).text().trim();
    if (!["Note", "Article"].includes(category)) {
      return;
    }
    const data: NoteTableEntry = {
      category: cells.eq(0).text().trim(),
      subCategory: cells.eq(1).text().trim(),
      enNoteUrl: extractNoteUrlFromGoogleUrl(
        cells.eq(2).find("a").attr("href") as string
      ) as string,
      zhTwNoteUrl: extractNoteUrlFromGoogleUrl(
        cells.eq(4).find("a").attr("href") as string
      ) as string,
    };
    noteTableData.push(data);
  });
  await browser.close();
  writeFileSync(
    "./res/note-table-data.json",
    JSON.stringify(noteTableData, null, 2)
  );
})();
