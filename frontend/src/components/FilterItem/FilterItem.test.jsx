import React from 'react';
import { shallow } from 'enzyme';

import FilterItem from './FilterItem';

describe('FilterItem', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<FilterItem />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should be unchecked by default', () => {
    const wrapper = shallow(<FilterItem />);
    expect(wrapper).not.toBeChecked();
  });
  it('should handle onChange event', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<FilterItem onClick={onClick} />);
    wrapper.find('input').simulate('change');
    expect(onClick).toHaveBeenCalled();
  });

  it('should set checked if passed', () => {
    const wrapper = shallow(<FilterItem checked />);
    expect(wrapper.find('input')).toBeChecked();
  });
});
