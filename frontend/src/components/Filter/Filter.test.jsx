import React from 'react';
import { shallow } from 'enzyme';

import Filter from './Filter';

const colors = [
  {
    id: 0,
    color: '#E84747',
  },
  {
    id: 1,
    color: '#F2994A',
  },
  {
    id: 2,
    color: '#F2C94C',
  },
];

const toggleColor = jest.fn();

describe('Filter', () => {
  it('should match snapshot', () => {
    const activeColors = [0, 1];
    const wrapper = shallow(
      <Filter
        colors={colors}
        activeColors={activeColors}
        toggleColor={toggleColor}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
