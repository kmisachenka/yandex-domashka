import { Note } from '../types';
import Notes from './Notes';

const text = {
  id: 1,
  type: 'text',
  text: 'some text',
  created: 1548969900000,
};

const image = {
  id: 2,
  type: 'image',
  text: 'some image',
  created: 1549189500000,
};

describe('Notes', () => {
  let notes: Notes;

  beforeEach(() => {
    notes = Notes.factory([text, image] as Note[]);
  });

  afterEach(() => {
    notes.clear();
  });

  describe('toArray()', () => {
    it('should return an array', () => {
      const array = notes.toArray();
      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(2);
    });
  });

  describe('length()', () => {
    it('should return notes length', () => {
      const length = notes.length();
      expect(length).toBe(2);
    });
  });

  describe('map()', () => {
    it('should return an array', () => {
      const changedNotes = notes.map(note => {
        /* eslint-disable no-param-reassign */
        note.text = 'changed';
        return note;
      });

      const array = changedNotes.toArray();

      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(2);

      expect(array[0].text).toBe('changed');
      expect(array[1].text).toBe('changed');
    });
  });

  describe('filter()', () => {
    it('should return an array', () => {
      const imageNotes = notes.filter(note => note.type === 'image');
      const notesArray = imageNotes.toArray();
      expect(notesArray).toBeInstanceOf(Array);
      expect(notesArray).toHaveLength(1);
      expect(notesArray[0].text).toBe(image.text);
    });
  });

  describe('forEach()', () => {
    it('should iterate over notes', () => {
      notes.forEach(note => {
        expect(note).toBeDefined();
      });
    });
  });

  describe('[Symbol.iterator]', () => {
    it('should be iterable', () => {
      /* eslint-disable no-restricted-syntax */
      for (const note of notes) {
        expect(note).toBeInstanceOf(Object);
      }
    });
  });

  describe('addNote()', () => {
    beforeEach(() => {
      notes.clear();
    });

    it('should add note', () => {
      const note = {
        id: 1,
        type: 'list',
        text: 'some list',
        created: 1520160803000,
      };
      notes.addNote(note as Note);
      const array = notes.toArray();
      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(1);
    });

    it('should add note with size', () => {
      const note = {
        id: 1,
        size: 'm',
        type: 'list',
        text: 'some list',
        created: 1520160803000,
      };
      notes.addNote(note as Note);
      const array = notes.toArray();
      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(1);
    });

    it('should assign size if not exists', () => {
      const note = {
        id: 1,
        type: 'list',
        text: 'some list',
        created: 1520160803000,
      };
      notes.addNote(note as Note);
      const array = notes.toArray();
      expect(array).toHaveLength(1);
      expect(array[0].size).toBe('s');
    });
  });

  describe('remove()', () => {
    beforeEach(() => {
      const note = {
        id: 1,
        type: 'image',
        text: 'some image',
        created: 1520160803000,
      };
      notes.addNote(note as Note);
    });

    it('should note by id', () => {
      expect(notes.toArray()).toHaveLength(3);
      notes.removeOne(1);
      expect(notes.toArray()).toHaveLength(2);
    });
  });

  describe('update()', () => {
    it('should update note by id', () => {
      const note = {
        id: 2,
        type: 'list',
        text: 'changed list',
        created: 1657769900000,
      };
      notes.updateOne(2, note as Note);
      expect(notes.toArray()).toEqual([text, note]);
    });
  });

  describe('getOne(id: number)', () => {
    it('shoud return note by id', () => {
      expect(notes.getOne(1)).toEqual(text);
      expect(notes.getOne(2)).toEqual(image);
    });
    it('shoud return undefined if note doesnt exists', () => {
      expect(notes.getOne(3)).toBeUndefined();
      expect(notes.getOne(99)).toBeUndefined();
      expect(notes.getOne(-1)).toBeUndefined();
    });
  });
});
