import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

describe('Label', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Label label="text" />);
    expect(wrapper).toMatchSnapshot();
  });
});
