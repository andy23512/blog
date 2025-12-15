export interface Note {
  id: string;
  title: string;
  tags: string[];
  createdAt: number;
  publishType: string;
  publishedAt: null;
  permalink: null;
  shortId: string;
  content: string;
  lastChangedAt: number;
  lastChangeUser: LastChangeUser;
  userPath: string;
  teamPath: null;
  readPermission: string;
  writePermission: string;
  publishLink: string;
}

export interface LastChangeUser {
  name: string;
  photo: string;
  biography: null;
  userPath: string;
}
