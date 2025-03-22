import { readFileSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import { Note } from "./hackmd.model";

const token: { hackmd: string } = JSON.parse(
  readFileSync("./token.json", { encoding: "utf8" })
);

async function callHackMdApi<T>(url: string): Promise<T> {
  return await fetch(`https://api.hackmd.io/v1${url}`, {
    headers: {
      Authorization: "Bearer " + token.hackmd,
    },
  }).then((res) => res.json());
}

(async () => {
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
})();
