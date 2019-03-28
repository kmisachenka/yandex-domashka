import React from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';

import styles from './NoteFooter.module.scss';

import { ReactComponent as DoneButton } from './svg/done.svg';
import { ReactComponent as EditButton } from './svg/edit.svg';
import Tags from '../Tags/Tags';

moment.locale('ru');

export default function NoteFooter(props) {
  const { created, tags } = props;
  return (
    <div className={styles.footer}>
      {tags && <Tags tags={tags} />}
      <div className={styles['last-line']}>
        <ul className={styles.buttons}>
          <li className={styles.item}>
            <button type="button" className={styles.button}>
              <DoneButton />
            </button>
          </li>
          <li className={styles.item}>
            <button type="button" className={styles.button}>
              <EditButton />
            </button>
          </li>
        </ul>
        <span className={styles.time}>{moment(created).fromNow()}</span>
      </div>
    </div>
  );
}

NoteFooter.defaultProps = {
  tags: [],
};

NoteFooter.propTypes = {
  created: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.number.isRequired),
};
