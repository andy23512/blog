import { readFileSync, writeFileSync } from "fs";
import moment from "moment";
import { Note } from "./hackmd.model";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[ '\-,()]+/g, "-");
}

function replaceNoteUrl(
  noteContent: string,
  urlToFileName: Record<string, string>
) {
  let result = noteContent;
  Object.entries(urlToFileName).forEach(([url, fileName]) => {
    result = result.replace(
      new RegExp(`\\[([^\\]]+)\\]\\(${url}(#[^)]+)?\\)`, "g"),
      `<a href="{% post_path ${fileName} %}$2">$1</a>`
    );
  });
  return result;
}

(async () => {
  const rawNotes: Note[] = JSON.parse(
    readFileSync("./res/hackmd-note-data.json", { encoding: "utf8" })
  );
  const notes = rawNotes.filter(
    (n) =>
      n.title.match(/^[\w\-,' ()]+$/) &&
      n.title !== "Tangent's CharaChorder and Forge Notebook" &&
      n.title !== "Tangent's CharaChorder and Forge Note List"
  );
  const categoryData: Record<string, string[]> = JSON.parse(
    readFileSync("./res/category-data.json", { encoding: "utf8" })
  );
  const urlToFileName: Record<string, string> = {};
  for (const note of notes) {
    const url = note.publishLink.replace("https://hackmd.io", "");
    const fileName = slugify(note.title);
    urlToFileName[url] = fileName;
  }
  for (const note of notes) {
    const url = note.publishLink.replace("https://hackmd.io", "");
    const fileName = urlToFileName[url];
    const markdownFileContent = `---
title: ${note.title}
date: ${moment(note.createdAt).format("YYYY-MM-DD HH:mm:ss")}
updated: ${moment(note.lastChangedAt).format("YYYY-MM-DD HH:mm:ss")}
${
  categoryData[note.shortId]
    ? `categories: [${categoryData[note.shortId].join(",")}]`
    : ""
}
---
${replaceNoteUrl(
  note.content
    .replace(/\[TOC\]\n/g, "")
    .replace(/\n##### /g, "\n###### ")
    .replace(/\n#### /g, "\n##### ")
    .replace(/\n### /g, "\n#### ")
    .replace(/\n## /g, "\n### ")
    .replace(/\n# /g, "\n## ")
    .replace(
      /:::spoiler (.*)\n([\S\s]*?):::/g,
      '{% collapsecard "$1" %}$2{% endcollapsecard %}'
    )
    .replace(
      /:::spoiler\n([\S\s]*?):::/g,
      '{% collapsecard "Show Detail" %}$1{% endcollapsecard %}'
    )
    .replace(/:::info/g, "{% blockquote %}")
    .replace(/:::warning/g, "{% blockquote %}")
    .replace(/:::/g, "{% endblockquote %}")
    .replace(/\[^\w+\]/g, " $0")
    .replace(
      /```mermaid\n([\S]+)([^`]+)```/g,
      "{% mermaid $1 %}$2{% endmermaid %}"
    )
    .replace(/:heavy_check_mark:/g, '<div class="check"></div>'),
  urlToFileName
)}
`;
    writeFileSync(`source/_posts/${fileName}.md`, markdownFileContent);
  }
})();
