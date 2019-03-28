import React from 'react';
import { useToggle } from 'react-use';
import * as propTypes from 'prop-types';
import hexToRgba from 'hex-to-rgba';
import styles from './FilterItem.module.scss';

export default function FilterItem(props) {
  const { checked } = props;
  const [isChecked, toggleChecked] = useToggle(checked);
  const { color, handleClick } = props;
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          toggleChecked();
          handleClick(isChecked);
        }}
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
};

FilterItem.propTypes = {
  handleClick: propTypes.func.isRequired,
  color: propTypes.string,
  checked: propTypes.bool,
};
