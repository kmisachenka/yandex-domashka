import React from 'react';
import cn from 'classnames';
import * as PropTypes from 'prop-types';

import styles from './Footer.module.scss';

export default function Footer(props) {
  const { copyright, className } = props;
  return (
    <footer className={cn(className, styles.footer)}>
      <div className={styles['show-on-desktop']} />
      <div className={styles.name}>{copyright}</div>
      <div>© Яндекс ШРИ</div>
    </footer>
  );
}

Footer.defaultProps = {
  copyright: 'Вася Пупкин',
  className: '',
};

Footer.propTypes = {
  copyright: PropTypes.string,
  className: PropTypes.string,
};
