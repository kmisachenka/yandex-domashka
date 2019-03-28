import React from 'react';
import * as PropTypes from 'prop-types';

import styles from './TextSection.module.scss';

import NoteFooter from '../../NoteFooter/NoteFooter';

export default function TextSection(props) {
  const { note, background } = props;
  const { title, text, tags, created } = note;

  return (
    <section className={styles.note} style={{ background }}>
      <div className={styles.body}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
      <NoteFooter tags={tags} created={created} />
    </section>
  );
}

TextSection.propTypes = {
  /* eslint-disable-next-line */
  note: PropTypes.object.isRequired,
  background: PropTypes.string.isRequired,
};
