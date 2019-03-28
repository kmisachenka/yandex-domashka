import React from 'react';

import LinkAttachments from '../LinkAttachments';
import ImageAttachments from '../ImageAttachments/ImageAttachments';

export default function Attachments(props) {
  const { attachments } = props;

  // TODO сделать нормальный выбор типа

  const { type } = attachments[0];

  switch (type) {
    case 'link':
      return <LinkAttachments attachments={attachments} />;
    case 'image':
      return <ImageAttachments attachments={attachments} />;
    default:
      break;
  }
}
