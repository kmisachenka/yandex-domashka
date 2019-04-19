import React from 'react';
import { shallow } from 'enzyme';
import * as luxon from 'luxon';

import NoteFooter from './NoteFooter';

jest.mock('luxon');
luxon.DateTime.fromMillis = jest.fn(() => ({
  toRelative: jest.fn(() => '2 дня'),
}));

const note = {
  id: 3,
  type: 'text',
  text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
  tags: [0],
  size: 's',
  created: 1551593220000,
};
const handleDoneClick = jest.fn();
describe('NoteFooter', () => {
  it.only('should match snapshot', () => {
    const wrapper = shallow(
      <NoteFooter note={note} handleDoneClick={handleDoneClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
