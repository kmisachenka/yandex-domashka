import React from 'react';
import { storiesOf } from '@storybook/react';
import Placeholder from './Placeholder';

storiesOf('Заглушка', module).add('по центру', () => (
  <Placeholder>
    <h1>Архив пуст</h1>
  </Placeholder>
));
