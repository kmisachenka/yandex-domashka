import React from 'react';
import * as PropTypes from 'prop-types';
import * as luxon from 'luxon';

import styles from './NoteFooter.module.scss';

import { ReactComponent as DoneButton } from './svg/done.svg';
import { ReactComponent as EditButton } from './svg/edit.svg';

import { Tags } from '../../containers';
import { Note } from '../../types';

export default function NoteFooter(props) {
  const { note, tags, handleDoneClick } = props;
  const { id, created, archived } = note;
  const time = luxon.DateTime.fromMillis(created).toRelative({ locale: 'ru' });

  return (
    <div className={styles.footer}>
      {tags && <Tags tags={tags} />}
      <div className={styles['last-line']}>
        <ul className={styles.buttons}>
          <li className={styles.item}>
            <button
              type="button"
              className={styles.button}
              disabled={archived}
              onClick={e => {
                e.preventDefault();
                handleDoneClick(id);
              }}
            >
              <DoneButton />
            </button>
          </li>
          <li className={styles.item}>
            <button type="button" className={styles.button} disabled={archived}>
              <EditButton />
            </button>
          </li>
        </ul>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
}

NoteFooter.defaultProps = {
  tags: [],
};

NoteFooter.propTypes = {
  note: PropTypes.shape(Note).isRequired,
  tags: PropTypes.arrayOf(PropTypes.number.isRequired),
  handleDoneClick: PropTypes.func.isRequired,
};
