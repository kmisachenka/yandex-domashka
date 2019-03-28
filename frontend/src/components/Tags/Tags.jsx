import React, { useContext } from 'react';
import * as PropTypes from 'prop-types';

import styles from './Tags.module.scss';
import { StateContext } from '../../contexts/stateContext';

export default function Tags(props) {
  const { tags } = props;
  const { state } = useContext(StateContext);
  const labels = state.tags.filter(tag => tags.some(id => id === tag.id));
  return (
    <ul className={styles.tags}>
      {labels.map(label => (
        <li key={label.id} className={styles.tag}>
          {label.tag}
        </li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.number).isRequired,
};
