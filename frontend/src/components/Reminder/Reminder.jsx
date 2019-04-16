import React from 'react';
import ReactSVG from 'react-svg';
import * as PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

import ReminderSVG from './svg/reminder.svg';
import styles from './Reminder.module.scss';

moment.locale('ru');

export default function Reminder(props) {
  const { reminder, className } = props;
  return (
    <section className={className}>
      <ReactSVG src={ReminderSVG} />
      <div className={styles.text}>{`Осталось ${moment(reminder).fromNow(true)}`}</div>
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
