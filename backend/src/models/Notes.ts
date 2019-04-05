import { Note, Type, Size, ID } from '../types';

type MapCallbackFunction = (note: Note) => Note;
type FilterCallbackFunction = (note: Note) => boolean;
type ForEachCallbackFunction = (note: Note) => void;
type FindCallbackFunction = (note: Note) => boolean;

export default class Notes {
  private notes: Note[];

  private constructor(notes: Note[]) {
    this.notes = notes;
  }

  public static factory(notes: Note[]): Notes {
    return new Notes(notes);
  }

  public addNote(note: Note): void {
    /* eslint-disable no-param-reassign */
    if (note.size) {
      this.notes.push(note);
    } else {
      /* eslint-disable no-param-reassign */
      note.size = Notes.getNoteSize(note);
      this.notes.push(note);
    }
  }

  private static getNoteSize(note: Note): Size {
    if (note.text) {
      const { length } = note.text;
      if (length > 300) {
        return Size.LARGE;
      }
      if (length > 150) {
        return Size.MEDIUM;
      }
    }

    if (note.type === Type.LIST) {
      if (note.items) {
        const { length } = note.items;
        if (length > 15) {
          return Size.LARGE;
        }
        if (length > 5) {
          return Size.MEDIUM;
        }
      }
    }

    if (note.attachments) {
      const { length } = note.attachments;
      if (length > 3) {
        return Size.MEDIUM;
      }
    }

    return Size.SMALL;
  }

  public toArray(): Note[] {
    return this.notes;
  }

  public map(callback: MapCallbackFunction): Notes {
    this.notes = this.notes.map(callback);
    return this;
  }

  public filter(callback: FilterCallbackFunction): Notes {
    return new Notes(this.notes.filter(callback));
  }

  public forEach(callback: ForEachCallbackFunction): void {
    this.notes.forEach(callback);
  }

  public [Symbol.iterator](): IterableIterator<Note> {
    return this.notes.values();
  }

  public length(): number {
    return this.notes.length;
  }

  public getByColorId(color: number): Note[] {
    const notes = this.toArray();
    return notes.filter(note => note.color === Number(color));
  }

  public removeOne(id: ID): Notes {
    const note = this.notes.find(n => n.id === Number(id));
    if (note) {
      const index = this.notes.indexOf(note);
      this.notes = this.notes
        .slice(0, index)
        .concat(this.notes.slice(index + 1));
    }
    return this;
  }

  public updateOne(id: ID, note: Note): Notes {
    const index = this.notes.findIndex(n => n.id === Number(id));
    if (index === -1) {
      throw Error(`there is no note with id: ${id}`);
    }
    this.notes[index] = note;
    return this;
  }

  public clear(): void {
    this.notes = [];
  }

  public getOne(id: number): Note | undefined {
    const notes = this.notes.filter(note => note.id === Number(id));
    if (notes.length > 0) {
      return notes[0];
    }
    /* eslint-disable-next-line */
    return;
  }
}
