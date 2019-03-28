import React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.scss';

export default function Button(props) {
  const { children, theme, disabled } = props;
  const themeStyles = styles[theme];
  return (
    <button
      className={cn(styles.button, themeStyles)}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  theme: 'default',
  disabled: false,

};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['default', 'primary']),
  disabled: PropTypes.bool,
};
