const HEADING_REGEX = /^(#{1,6}) /gm;

/**
 * Shift a note's whole heading outline so its top level lands on h2, leaving h1
 * to the post title. HackMD notes are inconsistent about whether they start at
 * `#` or `##`, so a fixed one-level shift would leave the outline uneven.
 */
export function normalizeHeadings(content: string): string {
  const levels = [...content.matchAll(HEADING_REGEX)].map(
    (match) => match[1].length,
  );
  if (!levels.length) {
    return content;
  }
  const desired = 2 - Math.min(...levels);
  // Never push a heading past h6: clamping there would merge two distinct
  // levels into one. A note deep enough to hit that keeps its own outline.
  const shift = desired > 0 ? Math.min(desired, Math.max(6 - Math.max(...levels), 0)) : desired;
  if (shift === 0) {
    return content;
  }
  return content.replace(
    HEADING_REGEX,
    (_, hashes: string) => "#".repeat(hashes.length + shift) + " ",
  );
}
