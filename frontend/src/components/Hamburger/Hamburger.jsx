import React from 'react';
import * as PropTypes from 'prop-types';

import styles from './Hamburger.module.scss';
import { ReactComponent as HamburgerSVG } from './svg/hamburger.svg';

export default function Hamburger(props) {
  const { handleClick } = props;
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <HamburgerSVG />
    </button>
  );
}

Hamburger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
