import { produce } from 'immer';

import {
  NOTES_REQUEST,
  NOTES_REQUEST_SUCCESS,
  ARCHIVE_REQUEST,
  ARCHIVE_REQUEST_SUCCESS,
  ARCHIVE_NOTE_REQUEST,
} from '../constants';

const initialState = {
  isLoading: false,
  notes: [],
  tags: [],
  colors: [],
};

/* eslint-disable no-param-reassign */
const notesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case NOTES_REQUEST: {
        draft.isLoading = true;
        break;
      }
      case NOTES_REQUEST_SUCCESS: {
        draft.isLoading = false;
        draft.notes = action.payload.notes.notes;
        draft.colors = action.payload.notes.colors;
        draft.tags = action.payload.notes.tags;
        break;
      }
      case ARCHIVE_REQUEST: {
        draft.isLoading = true;
        break;
      }
      case ARCHIVE_REQUEST_SUCCESS: {
        draft.isLoading = false;
        draft.notes = action.payload.notes;
        break;
      }
      case ARCHIVE_NOTE_REQUEST: {
        draft.notes = draft.notes.filter(note => note.id !== action.payload.id);
        break;
      }
      default:
        break;
    }
  });

export default notesReducer;
