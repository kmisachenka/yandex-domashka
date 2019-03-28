import React from 'react';
import * as PropTypes from 'prop-types';

import styles from './LinksAttachemnt.module.scss';
import { ReactComponent as UrlSVG } from './svg/url.svg';

function getHostname(url) {
  if (url) {
    return new URL(url).hostname;
  }
  return null;
}

export default function LinkAttachments(props) {
  const { attachments } = props;

  if (attachments.length > 1) {
    return (
      <ul className={styles.list}>
        {attachments.map(({ url }) => (
          <li key={url} className={styles.item}>
            <UrlSVG className={styles.icon} />
            <a
              href={url}
              className={styles.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getHostname(url)}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  const { url } = attachments[0];
  return (
    <>
      <UrlSVG className={styles.icon} />
      <a
        href={url}
        className={styles.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {getHostname(url)}
      </a>
    </>
  );
}

LinkAttachments.propTypes = {
  /* eslint-disable-next-line */
  attachments: PropTypes.array.isRequired,
};
