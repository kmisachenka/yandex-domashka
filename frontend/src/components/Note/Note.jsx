import React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Note.module.scss';

import Reminder from '../Reminder';
import Attachments from '../Attachements';
import ListSection from './ListSection';

import { NoteFooter } from '../../containers';
import { Note as NoteType } from '../../types';

export default function Note(props) {
  const { note, color } = props;
  const { reminder, attachments, size } = note;

  const Text = () => (
    <section className={styles.note} style={{ background: color }}>
      <div className={styles.body}>
        {note.title && <h2 className={styles.title}>{note.title}</h2>}
        {note.text && <p className={styles.text}>{note.text}</p>}
      </div>
      <NoteFooter note={note} />
    </section>
  );

  const Image = () => (
    <section className={styles.note} style={{ background: color }}>
      <img className={styles.image} src={`/img/${note.url}`} alt="Картинка" />
      <NoteFooter note={note} />
    </section>
  );

  const renderByType = () => {
    switch (note.type) {
      case 'text':
        return <Text />;
      case 'list':
        return <ListSection note={note} background={color} />;
      case 'image':
        return <Image />;
      default:
        return <></>;
    }
  };

  return (
    <article className={cn(styles.note, styles[size])}>
      {reminder && <Reminder reminder={reminder} className={styles.reminder} />}
      {renderByType(note)}
      {attachments && attachments.length && (
        <section className={styles.attachments}>
          <Attachments attachments={attachments} />
        </section>
      )}
    </article>
  );
}

Note.propTypes = {
  color: PropTypes.string.isRequired,
  note: PropTypes.shape(NoteType).isRequired,
};
