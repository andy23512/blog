export interface NoteTableEntry {
  category: string;
  subCategory: string;
  /** The note backing this entry in the edition currently being built. */
  selfNoteUrl: string;
  /** The same note in the other language edition. */
  otherNoteUrl: string;
}
