import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with custom copyright', () => {
    const wrapper = shallow(<Footer copyright="Кирилл Мисоченко" />);
    const name = wrapper.find('.name');
    expect(name).toHaveText('Кирилл Мисоченко');
  });
  it('should apply custom classes', () => {
    const wrapper = shallow(<Footer className="custom" />);
    expect(wrapper).toHaveClassName('custom');
  });
});
