import React from 'react';
import { storiesOf } from '@storybook/react';
import Placeholder from './Placeholder';

storiesOf('Заглушка', module).add('с текстом', () => (
  <Placeholder text="Архив пуст" />
));
