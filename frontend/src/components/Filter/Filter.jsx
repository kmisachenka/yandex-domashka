import React from 'react';
import * as PropTypes from 'prop-types';

import FilterItem from '../FilterItem';

import styles from './Filter.module.scss';

export default function Filter(props) {
  const { colors, activeColors, toggleColor } = props;
  return (
    <aside className={styles.filter}>
      <h2 className={styles.title}>Заметки</h2>
      <ul className={styles.list}>
        {colors.map(({ id, color }) => (
          <li key={id} className={styles.item}>
            {activeColors.includes(id) ? (
              <FilterItem checked id={id} color={color} onClick={() => toggleColor(id)} />
            ) : (
              <FilterItem id={id} color={color} onClick={() => toggleColor(id)} />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

Filter.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeColors: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleColor: PropTypes.func.isRequired,
};
