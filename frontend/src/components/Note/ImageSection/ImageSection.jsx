import React from 'react';
import * as PropTypes from 'prop-types';

import styles from './ImageSection.module.scss';

import NoteFooter from '../../NoteFooter/NoteFooter';

export default function ImageSection(props) {
  const { note, background } = props;
  const { url, tags, created } = note;

  return (
    <section className={styles.note} style={{ background }}>
      <img className={styles.image} src={`/img/${url}`} alt="Картинка" />
      <NoteFooter tags={tags} created={created} />
    </section>
  );
}

ImageSection.propTypes = {
  /* eslint-disable-next-line */
  note: PropTypes.object.isRequired,
  background: PropTypes.string.isRequired,
};
