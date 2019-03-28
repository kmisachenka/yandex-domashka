import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Кнопка', module)
  .add('с текстом', () => (
    <Button>Активные</Button>
  ))
  .add('неактивная', () => (
    <Button disabled>Активные</Button>
  ))
  .add('с темой primary', () => (
    <Button theme="primary">Добавить</Button>
  ));
