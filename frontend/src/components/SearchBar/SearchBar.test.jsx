import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
