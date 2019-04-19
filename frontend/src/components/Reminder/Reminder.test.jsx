import React from 'react';
import { shallow } from 'enzyme';
import * as luxon from 'luxon';

import Reminder from './Reminder';

jest.mock('luxon');

luxon.DateTime.fromMillis = jest.fn(() => ({
  toRelative: jest.fn(() => 'через 2 дня'),
}));

describe('Reminder', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Reminder reminder={12345} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should apply custom classes', () => {
    const wrapper = shallow(<Reminder reminder={12345} className="custom" />);
    expect(wrapper).toHaveClassName('custom');
  });
});
