import React from 'react';
import { shallow } from 'enzyme';

import ImageAttachments from './ImageAttachments';

describe('ImageAttachments', () => {
  it('should match snapshot', () => {
    const attachments = [
      {
        type: 'image',
        url: 'https://link.com/image.png',
      },
    ];
    const wrapper = shallow(<ImageAttachments attachments={attachments} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a list', () => {
    const attachments = [
      {
        type: 'image',
        url: 'https://link.com/image.png',
      },
      {
        type: 'image',
        url: 'https://link.net/image.svg',
      },
    ];
    const wrapper = shallow(<ImageAttachments attachments={attachments} />);
    const list = wrapper.find('ul');
    const listItems = list.find('li');
    expect(listItems).toHaveLength(2);
  });
});
