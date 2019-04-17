import React from 'react';
import { storiesOf } from '@storybook/react';
import Filter from './Filter';

storiesOf('Фильтр', module).add(
  'фильтр',
  () => (
    <Filter
      activeColors={[1, 3, 4]}
      colors={[
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
        {
          id: 3,
          color: '#219653',
        },
        {
          id: 4,
          color: '#56CCF2',
        },
        {
          id: 5,
          color: '#2F80ED',
        },
        {
          id: 6,
          color: '#9B51E0',
        },
      ]}
    />
  ),
  { viewport: { defaultViewport: 'iphonex' } }
);
