import React from 'react';
import * as PropTypes from "prop-types";

import styles from './Placeholder.module.scss';

const Placeholder = props => {
  const { children } = props;
  return <article className={styles.placeholder}>{children}</article>;
};

Placeholder.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Placeholder;
