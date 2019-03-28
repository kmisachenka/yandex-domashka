import React from 'react';

import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <input type="search" className={styles.input} placeholder="Поиск" />
      </label>
      <button type="button" className={styles.button}>
        Найти
      </button>
    </form>
  );
}
