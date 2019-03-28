import React from 'react';
import { storiesOf } from '@storybook/react';
import Hamburger from './Hamburger';

storiesOf('Гамбургер', module)
  .add('обычный', () => (
    <Hamburger />
  ));
