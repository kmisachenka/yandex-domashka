import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './ListSection.module.scss';

import NoteFooter from '../../NoteFooter/NoteFooter';

const getChecked = list => list.filter(element => element.checked);
const getUnchecked = list => list.filter(element => !element.checked);

export default function ListSection(props) {
  const { note, background } = props;
  const { title, created, tags, items } = note;

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
        <NoteFooter tags={tags} created={created} />
      </section>
    </>
  );
}

ListSection.propTypes = {
  note: PropTypes.shape({
    size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
    created: PropTypes.number.isRequired,
    title: PropTypes.string,
    tags: PropTypes.array,
    color: PropTypes.number,
    attachments: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    ),
  }).isRequired,
  background: PropTypes.string.isRequired,
};
