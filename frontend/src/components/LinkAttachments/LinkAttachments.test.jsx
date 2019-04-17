import React from 'react';
import { shallow } from 'enzyme';

import LinkAttachments from './LinkAttachments';

describe('LinkAttachments', () => {
  it('should match snapshot', () => {
    const attachments = [
      {
        type: 'link',
        url: 'https://thiscatdoesnotexist.com',
      },
    ];
    const wrapper = shallow(<LinkAttachments attachments={attachments} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list when greater then 2', () => {
    const attachments = [
      {
        type: 'link',
        url: 'https://thiscatdoesnotexist.com',
      },
      {
        type: 'link',
        url: 'https://yandex.by',
      },
    ];
    const wrapper = shallow(<LinkAttachments attachments={attachments} />);
    expect(wrapper).toHaveDisplayName('ul');
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(2);
  });
  it('should render a link when 1 attachemnt', () => {
    const attachments = [
      {
        type: 'link',
        url: 'https://tut.by',
      },
    ];
    const wrapper = shallow(<LinkAttachments attachments={attachments} />);
    expect(wrapper).not.toHaveDisplayName('ul');
    const links = wrapper.find('a');
    expect(links).toHaveLength(1);
  });
});
