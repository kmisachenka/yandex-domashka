import React from 'react';
import cn from 'classnames';
import useToggle from '@rooks/use-toggle';

import styles from './Header.module.scss';
import Button from '../Button';
import Hamburger from '../Hamburger';
import Logo from '../Logo';
import SearchBar from '../SearchBar';

export default function Header() {
  const [isActive, toggleIsActive] = useToggle(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <div className={styles.hamburger}>
          <Hamburger className={styles.hamburger} handleClick={toggleIsActive} />
        </div>
      </div>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <nav className={cn(styles.navigation, { [`${styles.active}`]: isActive })}>
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <Button>Активные</Button>
          </li>
          <li className={styles['list-item']}>
            <Button disabled>Архив</Button>
          </li>
          <li className={styles['list-item']}>
            <Button theme="primary">Добавить</Button>
          </li>
          <li className={cn(styles.listItem, styles['hide-on-desktop'])}>
            <SearchBar />
          </li>
        </ul>
      </nav>
    </header>
  );
}
