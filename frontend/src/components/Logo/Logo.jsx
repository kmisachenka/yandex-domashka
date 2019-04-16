import React from 'react';
import * as propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

export default function Logo(props) {
  const { service } = props;
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img src="https://yastatic.net/q/logoaas/v1/Яндекс.svg" alt="Яндекс" />
      </Link>
      <Link to="/" className={styles.service}>
        <img
          src={`https://yastatic.net/q/logoaas/v1/${service}.svg`}
          alt={`${service}`}
        />
      </Link>
    </div>
  );
}

Logo.defaultProps = {
  service: 'Домашка',
};

Logo.propTypes = {
  service: propTypes.string,
};
