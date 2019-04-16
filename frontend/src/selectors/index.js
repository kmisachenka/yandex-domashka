import { createSelector } from 'reselect';

export const filterColorsSelector = createSelector(
  state => state.filter.colors,
  colors => colors
);

export const notesSelector = createSelector(
  state => state.notes.notes,
  notes => notes
);

export const colorsSelector = createSelector(
  state => state.notes.colors,
  colors => colors
);

export const tagsSelector = createSelector(
  state => state.notes.tags,
  tags => tags
);
