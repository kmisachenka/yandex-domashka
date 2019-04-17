import React from 'react';
import { shallow, mount } from 'enzyme';
import Hamburger from './Hamburger';

describe('Hamburger', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle click', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<Hamburger handleClick={handleClick} />);
    const button = wrapper.find('.button');
    button.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
