import React from 'react';
import * as PropTypes from 'prop-types';

import styles from './Tags.module.scss';

export default function Tags(props) {
  const { tags, allTags } = props;
  const labels = allTags.filter(tag => tags.some(id => id === tag.id));
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
  allTags: PropTypes.arrayOf(PropTypes.object).isRequired,
};
