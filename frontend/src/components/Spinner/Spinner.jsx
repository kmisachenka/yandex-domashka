import React from 'react';
import { ClipLoader } from 'react-spinners';

import styles from './Spinner.module.scss';

const Spinner = () => (
  <div className={styles.spinner}>
    <ClipLoader size={100} color="#fc0" />
  </div>
);

export default Spinner;
