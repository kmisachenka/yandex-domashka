import React from 'react';
import * as propTypes from 'prop-types';
import styles from './Logo.module.scss';

export default function Logo(props) {
  const { service } = props;
  return (
    <div className={styles.wrapper}>
      <a href="#/">
        <img
          src="https://yastatic.net/q/logoaas/v1/Яндекс.svg"
          alt="Яндекс"
        />
      </a>
      <a className={styles.service} href="#/">
        <img
          src={`https://yastatic.net/q/logoaas/v1/${service}.svg`}
          alt={`${service}`}
        />
      </a>
    </div>
  );
}

Logo.defaultProps = {
  service: 'Домашка',
};

Logo.propTypes = {
  service: propTypes.string,
};
