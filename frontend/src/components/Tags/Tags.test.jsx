import React from 'react';
import { shallow } from 'enzyme';

import Tags from './Tags';

const allTags = [
  {
    id: 0,
    tag: 'покупки',
  },
  {
    id: 1,
    tag: 'Работа',
  },
  {
    id: 2,
    tag: 'ШРИ',
  },
];

describe('Tags', () => {
  it('should match snapshot', () => {
    const tags = [0, 1, 2];
    const wrapper = shallow(<Tags tags={tags} allTags={allTags} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render only provided tags', () => {
    const tags = [1];
    const wrapper = shallow(<Tags tags={tags} allTags={allTags} />);
    expect(wrapper).toMatchSnapshot();
  });
});
