import React from 'react';
import { storiesOf } from '@storybook/react';
import FilterItem from './FilterItem';

const noop = () => {};

storiesOf('Фильтр: элемент', module)
  .add('с дефолтным цветом', () => (
    <FilterItem handleClick={noop} />
  ))
  .add('с кастомным цветом', () => (
    <FilterItem color="#219653" handleClick={noop} />
  ))
  .add('checked', () => (
    <FilterItem checked handleClick={noop} />
  ));
