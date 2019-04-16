import React from 'react';
import * as PropTypes from 'prop-types';
import hexToRgba from 'hex-to-rgba';

import styles from './FilterItem.module.scss';

export default function FilterItem(props) {
  const { checked, color, onClick } = props;
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={onClick}
      />
      <span
        className={styles.checkbox}
        style={{ backgroundColor: hexToRgba(color) }}
      />
    </label>
  );
}

FilterItem.defaultProps = {
  color: '#E84747',
  checked: false,
  onClick: () => {},
};

FilterItem.propTypes = {
  color: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};
