import notesReducer from './notesReducer';

const initialState = {
  isLoading: false,
  notes: [],
  tags: [],
  colors: [],
};

describe('notesReducer', () => {
  describe('NOTES_REQUEST', () => {
    it('should set loading state', () => {
      const state = notesReducer(initialState, {
        type: 'NOTES_REQUEST',
      });
      expect(state).toEqual({
        isLoading: true,
        notes: [],
        tags: [],
        colors: [],
      });
    });
  });
  describe('NOTES_REQUEST_SUCCESS', () => {
    it('should set loading false', () => {
      const state = notesReducer(
        {
          isLoading: true,
          notes: [],
          tags: [],
          colors: [],
        },
        {
          type: 'NOTES_REQUEST_SUCCESS',
          payload: {
            notes: { notes: [], tags: [], colors: [] },
          },
        }
      );
      expect(state).toEqual({
        isLoading: false,
        notes: [],
        tags: [],
        colors: [],
      });
    });
    it('should set notes', () => {
      const state = notesReducer(initialState, {
        type: 'NOTES_REQUEST_SUCCESS',
        payload: {
          notes: { notes: [1, 2], tags: [], colors: [] },
        },
      });
      expect(state).toEqual({
        isLoading: false,
        notes: [1, 2],
        tags: [],
        colors: [],
      });
    });
    it('should overwrite with existing notes', () => {
      const state = notesReducer(
        {
          isLoading: true,
          notes: [1, 2],
          tags: [],
          colors: [],
        },
        {
          type: 'NOTES_REQUEST_SUCCESS',
          payload: {
            notes: { notes: [2, 3], tags: [], colors: [] },
          },
        }
      );
      expect(state).toEqual({
        isLoading: false,
        notes: [2, 3],
        tags: [],
        colors: [],
      });
    });
    it('should set tags', () => {
      const state = notesReducer(initialState, {
        type: 'NOTES_REQUEST_SUCCESS',
        payload: {
          notes: { notes: [], tags: [1, 2], colors: [] },
        },
      });
      expect(state).toEqual({
        isLoading: false,
        notes: [],
        tags: [1, 2],
        colors: [],
      });
    });
    it('should overwrite with existing tags', () => {
      const state = notesReducer(
        {
          isLoading: true,
          notes: [],
          tags: [1, 2],
          colors: [],
        },
        {
          type: 'NOTES_REQUEST_SUCCESS',
          payload: {
            notes: { notes: [], tags: [2, 3], colors: [] },
          },
        }
      );
      expect(state).toEqual({
        isLoading: false,
        notes: [],
        tags: [2, 3],
        colors: [],
      });
    });
    it('should overwrite with existing colors', () => {
      const state = notesReducer(
        {
          isLoading: false,
          notes: [],
          tags: [],
          colors: [1, 2],
        },
        {
          type: 'NOTES_REQUEST_SUCCESS',
          payload: {
            notes: { notes: [], tags: [], colors: [2, 3] },
          },
        }
      );
      expect(state).toEqual({
        isLoading: false,
        notes: [],
        tags: [],
        colors: [2, 3],
      });
    });
  });
  describe('ARCHIVE_REQUEST', () => {
    it('should set loading state', () => {
      const state = notesReducer(initialState, {
        type: 'ARCHIVE_REQUEST',
      });
      expect(state).toEqual({
        isLoading: true,
        notes: [],
        tags: [],
        colors: [],
      });
    });
  });
  describe('ARCHIVE_REQUEST_SUCCESS', () => {
    it('should set loading state to false', () => {
      const state = notesReducer(
        {
          isLoading: true,
          notes: [],
          tags: [],
          colors: [],
        },
        {
          type: 'ARCHIVE_REQUEST_SUCCESS',
          payload: {
            notes: [],
          },
        }
      );
      expect(state).toEqual({
        isLoading: false,
        notes: [],
        tags: [],
        colors: [],
      });
    });
    it('should set notes', () => {
      const state = notesReducer(
        {
          isLoading: true,
          notes: [],
          tags: [],
          colors: [],
        },
        {
          type: 'ARCHIVE_REQUEST_SUCCESS',
          payload: {
            notes: [1, 2],
          },
        }
      );
      expect(state).toEqual({
        isLoading: false,
        notes: [1, 2],
        tags: [],
        colors: [],
      });
    });
    it('should not touch tags and colors', () => {
      const state = notesReducer(
        {
          isLoading: true,
          notes: [],
          tags: [1, 1],
          colors: [2, 2],
        },
        {
          type: 'ARCHIVE_REQUEST_SUCCESS',
          payload: {
            notes: [3, 3],
          },
        }
      );
      expect(state).toEqual({
        isLoading: false,
        notes: [3, 3],
        tags: [1, 1],
        colors: [2, 2],
      });
    });
  });
  describe('ARCHIVE_NOTE_REQUEST', () => {
    it('should filter out archived note by id', () => {
      const state = notesReducer(
        {
          isLoading: false,
          notes: [
            {
              id: 1,
            },
            {
              id: 2,
            },
            {
              id: 3,
            },
          ],
          tags: [],
          colors: [],
        },
        {
          type: 'ARCHIVE_NOTE_REQUEST',
          payload: {
            id: 2,
          },
        }
      );
      expect(state).toEqual({
        isLoading: false,
        notes: [
          {
            id: 1,
          },
          {
            id: 3,
          },
        ],
        tags: [],
        colors: [],
      });
    });
  });
});
