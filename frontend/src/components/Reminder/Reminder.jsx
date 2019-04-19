import React from 'react';
import ReactSVG from 'react-svg';
import * as PropTypes from 'prop-types';
import * as luxon from 'luxon';

import ReminderSVG from './svg/reminder.svg';
import styles from './Reminder.module.scss';

export default function Reminder(props) {
  const { reminder, className } = props;
  const time = luxon.DateTime.fromMillis(reminder).toRelative({ locale: 'ru' });
  /* dirty hack: вырезал 'через' */
  const hackedTime = time.substring(6, time.length);
  return (
    <section className={className}>
      <ReactSVG src={ReminderSVG} />
      <div className={styles.text}>{`Осталось ${hackedTime}`}</div>
    </section>
  );
}

Reminder.defaultProps = {
  className: '',
};

Reminder.propTypes = {
  reminder: PropTypes.number.isRequired,
  className: PropTypes.string,
};
