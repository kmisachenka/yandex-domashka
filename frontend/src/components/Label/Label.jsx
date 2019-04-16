import React from 'react';
import * as PropTypes from 'prop-types';

import styles from "./Label.module.scss";

export default function Label(props) {
  const { label } = props;
  return (
    <aside className={styles.label}>
      <h2 className={styles.title}>{label}</h2>
    </aside>
  );
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
};
