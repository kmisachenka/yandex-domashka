import callApi from '../utils/callApi';

import {
  NOTES_REQUEST,
  NOTES_REQUEST_SUCCESS,
  ARCHIVE_REQUEST,
  ARCHIVE_REQUEST_SUCCESS,
  ARCHIVE_NOTE_REQUEST,
  ARCHIVE_NOTE_REQUEST_SUCCESS,
  TOGGLE_COLOR,
} from '../constants';

export const requestNotes = () => ({
  type: NOTES_REQUEST,
});

export const requestNotesSuccess = notes => ({
  type: NOTES_REQUEST_SUCCESS,
  payload: {
    notes,
  },
});

export const requestArchive = () => ({
  type: ARCHIVE_REQUEST,
});

export const requestArchiveSuccess = notes => ({
  type: ARCHIVE_REQUEST_SUCCESS,
  payload: {
    notes,
  },
});

export const archiveNoteRequest = id => ({
  type: ARCHIVE_NOTE_REQUEST,
  payload: {
    id,
  },
});

export const archiveNoteSuccess = id => ({
  type: ARCHIVE_NOTE_REQUEST_SUCCESS,
  payload: {
    id,
  },
});

export const toggleColor = id => ({
  type: TOGGLE_COLOR,
  payload: {
    id,
  },
});

// В thunk'ах нет обработки ошибок

export const fetchNotes = () => dispatch => {
  dispatch(requestNotes());
  return callApi('/notes').then(({ results }) =>
    dispatch(requestNotesSuccess(results))
  );
};

export const fetchArchive = () => dispatch => {
  dispatch(requestArchive());
  return callApi('/archive').then(({ results }) =>
    dispatch(requestArchiveSuccess(results))
  );
};

export const archiveNote = id => dispatch => {
  dispatch(archiveNoteRequest(id));
  return callApi(`/archive/${id}`, { method: 'POST' }).then(() => {
    dispatch(archiveNoteSuccess(id));
  });
};




