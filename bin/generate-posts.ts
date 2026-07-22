import * as cheerio from "cheerio";
import moment from "moment";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { Note } from "../model/hackmd.model.js";
import { NoteTableEntry } from "../model/note-table-entry.model.js";
import { siteConfig } from "../site.config.js";
import { normalizeHeadings } from "../util/normalize-headings.js";
import { slugify } from "../util/slugify.js";

function replaceNoteUrl(
  noteContent: string,
  urlToFileName: Record<string, string>,
) {
  let result = noteContent;
  Object.entries(urlToFileName).forEach(([url, fileName]) => {
    result = result.replaceAll(
      new RegExp(String.raw`\[([^\]]+)\]\(${url}(#[^)]+)?\)`, "g"),
      `<a href="{% post_path ${fileName} %}$2">$1</a>`,
    );
  });
  return result;
}

const rawNotes: Note[] = JSON.parse(
  readFileSync("./res/hackmd-note-data.json", { encoding: "utf8" }),
);
const noteTableData: NoteTableEntry[] = JSON.parse(
  readFileSync("./res/note-table-data.json", { encoding: "utf8" }),
);
// The note table is the source of truth for which notes belong to this edition.
// Matching on it also excludes the notebook and note list, which are tagged like
// the rest but are not posts.
const selfNoteUrls = new Set(noteTableData.map((entry) => entry.selfNoteUrl));
const notes = rawNotes.filter((n) => selfNoteUrls.has(n.publishLink));
const urlToFileName: Record<string, string> = {};
const imageUrls = new Set<string>();
for (const note of rawNotes) {
  const url = note.publishLink.replace("https://hackmd.io", "");
  const fileName = slugify(note.title);
  urlToFileName[url] = fileName;
}
for (const note of notes) {
  const regExp = /!\[.*?\]\((https:\/\/hackmd\.io\/_uploads\/[^)]+)\)/g;
  let match;
  while ((match = regExp.exec(note.content)) !== null) {
    imageUrls.add(match[1]);
  }
}
for (const url of imageUrls) {
  const fileName = url.split("/").pop() as string;
  if (existsSync(`source/images/${fileName}`)) {
    continue;
  }
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  writeFileSync(`source/images/${fileName}`, Buffer.from(buffer));
}
let written = 0;
let skipped = 0;
for (const note of notes) {
  const url = note.publishLink.replace("https://hackmd.io", "");
  const response = await fetch(note.publishLink);
  const html = await response.text();
  const $ = cheerio.load(html);
  const description = $('meta[name="description"]').attr("content") || "";
  const noteTableEntry = noteTableData.find((entry) =>
    entry.selfNoteUrl.endsWith(url),
  );
  if (!noteTableEntry) {
    console.warn(`No note table entry found for note: ${note.title}`);
    skipped++;
    continue;
  }
  const otherNote = rawNotes.find(
    (n) => n.publishLink === noteTableEntry.otherNoteUrl,
  );
  if (!otherNote) {
    console.warn(
      `No ${siteConfig.otherLanguage.lang} note found for note: ${note.title}`,
    );
    skipped++;
    continue;
  }
  const fileName = urlToFileName[url];
  const markdownFileContent = `---
title: ${note.title}
description: ${description}
date: ${moment(note.createdAt).toISOString()}
updated: ${moment(note.lastChangedAt).toISOString()}
categories: [${noteTableEntry.category}, ${noteTableEntry.subCategory}]
alias:
${[-2, -1, 0, 1, 2]
  .map(
    (offset) =>
      moment(note.createdAt).add(offset, "days").format("  - /YYYY/MM/DD/") +
      fileName +
      "/",
  )
  .join("\n")}
otherLanguages:
  - text: ${siteConfig.otherLanguage.text}
    lang: ${siteConfig.otherLanguage.lang}
    path: ${siteConfig.otherLanguage.baseUrl}${
      urlToFileName[noteTableEntry.otherNoteUrl.replace("https://hackmd.io", "")]
    }/
hackMDUrl: ${note.publishLink}
---
${replaceNoteUrl(
  normalizeHeadings(note.content.replaceAll(/\[TOC\]\s*\n/g, ""))
    .replaceAll(
      /:::spoiler (.*)\n([\S\s]*?):::/g,
      '{% collapsecard "$1" %}$2{% endcollapsecard %}',
    )
    .replaceAll(
      /:::spoiler\n([\S\s]*?):::/g,
      `{% collapsecard "${siteConfig.spoilerFallbackTitle}" %}$1{% endcollapsecard %}`,
    )
    .replaceAll(":::info", "{% blockquote %}")
    .replaceAll(":::warning", "{% blockquote %}")
    .replaceAll(":::", "{% endblockquote %}")
    .replaceAll(/\[^\w+\]/g, " $0")
    .replaceAll(":heavy_check_mark:", '<div class="check"></div>')
    .replaceAll("https://hackmd.io/_uploads/", siteConfig.imageBasePath),
  urlToFileName,
)}
`;
  writeFileSync(`source/_posts/${fileName}.md`, markdownFileContent);
  written++;
}
console.log(`${written} post(s) written, ${skipped} note(s) skipped.`);
