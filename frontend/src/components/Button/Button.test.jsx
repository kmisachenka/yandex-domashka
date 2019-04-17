import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Button>button</Button>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render children', () => {
    const wrapper = shallow(<Button>Test Button</Button>);
    expect(wrapper).toHaveText('Test Button');
  });
  it('should render default theme by default', () => {
    const wrapper = shallow(<Button>button</Button>);
    expect(wrapper).toHaveClassName('default');
  });
  it('should render primary theme', () => {
    const wrapper = shallow(<Button theme="primary">button</Button>);
    expect(wrapper).toHaveClassName('primary');
  });
  it('should handle click', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<Button handleClick={handleClick}>Test</Button>);
    const button = wrapper.find('.button');
    button.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
