interface Tag {
  id: number;
  tag: string;
}

interface Color {
  id: number;
  color: string;
}

interface ListItem {
  text: string;
  checked: boolean;
}

interface Attachment {
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
}
