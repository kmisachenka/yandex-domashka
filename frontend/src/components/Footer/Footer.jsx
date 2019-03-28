import React from 'react';
import * as propTypes from 'prop-types';
import styles from './Footer.module.scss';

export default function Footer(props) {
  const { copyright } = props;
  return (
    <footer className={styles.footer}>
      <div className={styles['show-on-desktop']} />
      <div className={styles.name}>
        {copyright}
      </div>
      <div>
        © Яндекс ШРИ
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  copyright: 'Вася Пупкин',
};

Footer.propTypes = {
  copyright: propTypes.string,
};
