import fetch from "node-fetch";
import { readFileSync, writeFileSync } from "node:fs";
import { Note } from "../model/hackmd.model.js";

const token: { hackmd: string } = JSON.parse(
  readFileSync("./token.json", { encoding: "utf8" })
);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callHackMdApi<T>(url: string): Promise<T> {
  try {
    return await fetch(`https://api.hackmd.io/v1${url}`, {
      headers: {
        Authorization: "Bearer " + token.hackmd,
      },
    }).then((res) => res.json() as T);
  } catch {
    console.log("api error, retry in 5 min.");
    await sleep(5 * 60 * 1000);
    return await callHackMdApi(url);
  }
}

const notes = await callHackMdApi<Note[]>("/notes");
const ccAndForgeNotes = notes.filter(
  (n) => n.tags.includes("CC / Forge") && n.publishedAt
);
const finalNoteData: Note[] = [];
for (const note of ccAndForgeNotes) {
  const noteWithContent = await callHackMdApi<Note>(`/notes/${note.id}`);
  finalNoteData.push(noteWithContent);
}
writeFileSync(
  "./res/hackmd-note-data.json",
  JSON.stringify(finalNoteData, null, 2)
);
