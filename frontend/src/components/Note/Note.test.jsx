import React from 'react';
import { shallow } from 'enzyme';

import Note from './Note';

const note = {
  id: 3,
  type: 'text',
  text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
  tags: [0],
  size: 's',
  created: 1551593220000,
};

describe('Note', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Note note={note} color="#FFFFFF" />);
    expect(wrapper).toMatchSnapshot();
  });
});
