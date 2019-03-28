import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from './SearchBar';

storiesOf('Поиск', module)
  .add('строка поиска', () => (
    <SearchBar />
  ));
