import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with custom service', () => {
    const wrapper = shallow(<Logo service="Test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
