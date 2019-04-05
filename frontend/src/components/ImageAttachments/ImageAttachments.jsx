import React from 'react';
import * as PropTypes from 'prop-types';

import styles from './ImageAttachments.module.scss';
import { ReactComponent as ImageSVG } from './svg/image.svg';

export default function ImageAttachments(props) {
  const { attachments } = props;
  return (
    <>
      <ImageSVG className={styles.svg} />
      <ul className={styles.list}>
        {attachments.map(({ url }) => (
          <li key={url} className={styles.item}>
            <img src={`/img/${url}`} className={styles.image} alt="Картинка" />
          </li>
        ))}
      </ul>
    </>
  );
}

ImageAttachments.propTypes = {
  /* eslint-disable-next-line */
  attachments: PropTypes.array.isRequired,
};
