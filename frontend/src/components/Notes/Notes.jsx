import React from 'react';
import * as PropTypes from 'prop-types';

import styles from './Notes.module.scss';
import Note from '../Note';

export default function Notes(props) {
  const { notes, colors } = props;
  return (
    <div className={styles.grid}>
      {notes.map(note => (
        <Note colors={colors} key={`${note.id}`} note={note} />
      ))}
    </div>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(Note).isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
