import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './ListSection.module.scss';

import { NoteFooter } from '../../../containers';
import { Note } from "../../../types";

const getChecked = list => list.filter(element => element.checked);
const getUnchecked = list => list.filter(element => !element.checked);

export default function ListSection(props) {
  const { note, background } = props;
  const { title, items, archived } = note;

  const [checked] = useState(getChecked(items));
  const [unchecked] = useState(getUnchecked(items));

  return (
    <>
      <section className={styles.note} style={{ background }}>
        <div className={styles.body}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {unchecked.length && (
            <ul className={styles.unchecked}>
              {unchecked.map(({ text }) => (
                <li key={text} className={styles['unchecked-item']}>
                  <label
                    className={cn(styles['unchecked-option'], styles.option)}
                  >
                    <input
                      type="checkbox"
                      value={text}
                      className={styles.input}
                      onChange={() => {}}
                      disabled={archived}
                    />
                    <span className={styles.checkbox} />
                    <span className={styles['checkbox-text']}>{text}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section className={styles['checked-section']}>
        {checked.length && (
          <ul className={styles.checked}>
            {checked.map(({ text }) => (
              <li key={text} className={styles['checked-item']}>
                <label className={styles.option}>
                  <input
                    type="checkbox"
                    value={text}
                    className={styles.input}
                    onChange={() => {}}
                    checked
                    disabled={archived}
                  />
                  <span className={styles.checkbox} />
                  <span
                    className={cn(
                      styles['checkbox-text'],
                      styles['checked-item']
                    )}
                  >
                    {text}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        )}
        <NoteFooter note={note} />
      </section>
    </>
  );
}

ListSection.propTypes = {
  note: PropTypes.shape(Note).isRequired,
  background: PropTypes.string.isRequired,
};
