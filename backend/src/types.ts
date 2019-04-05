export interface Tag {
  id: number;
  tag: string;
}

export interface Color {
  id: number;
  color: string;
}

export interface ListItem {
  text: string;
  checked: boolean;
}

export interface Attachment {
  type: string;
  url: string;
}

export enum Type {
  TEXT = 'text',
  LIST = 'list',
  IMAGE = 'image',
}

export enum Size {
  SMALL = 's',
  MEDIUM = 'm',
  LARGE = 'l',
}

export type ID = string | number;

export interface Note {
  id: ID;
  type: Type;
  title?: string;
  text?: string;
  color?: number;
  tags?: number[];
  size?: Size;
  items?: ListItem[];
  attachments?: Attachment[];
  reminder?: number;
  created: number;
  archived?: boolean;
}

export interface NotesSchema {
  tags: Tag[];
  colors: Color[];
  notes: Note[];
}
