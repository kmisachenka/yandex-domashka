import React from 'react';
import * as PropTypes from 'prop-types';
import hexToRgba from 'hex-to-rgba';
import cn from 'classnames';

import styles from './Note.module.scss';

import Reminder from '../Reminder';
import Attachments from '../Attachements';
import ListSection from './ListSection';
import TextSection from './TextSection';
import ImageSection from './ImageSection';

export default function Note(props) {
  const { note, colors } = props;
  const { reminder, attachments, size } = note;

  const getColorOrDefault = id => {
    if (id !== undefined) {
      const { color } = colors.find(o => o.id === id);
      const rgba = hexToRgba(color, 0.4);
      return `linear-gradient(0deg, ${rgba}, ${rgba}), #FFFFFF`;
    }
    return '#FFFFFF';
  };

  const renderByType = noteToBeRendered => {
    const { type, color } = noteToBeRendered;
    const background = getColorOrDefault(color);
    switch (type) {
      case 'text':
        return <TextSection note={noteToBeRendered} background={background} />;
      case 'list':
        return <ListSection note={noteToBeRendered} background={background} />;
      case 'image':
        return <ImageSection note={noteToBeRendered} background={background} />;
      default:
        return <></>;
    }
  };

  return (
    <article className={cn(styles.note, styles[size])}>
      {reminder && (
        <section className={styles.reminder}>
          <Reminder reminder={reminder} />
        </section>
      )}
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
  note: PropTypes.shape({
    type: PropTypes.oneOf(['list', 'text', 'image']).isRequired,
    size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
    created: PropTypes.number.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.array,
    color: PropTypes.number,
    attachments: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(['link', 'image']).isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
