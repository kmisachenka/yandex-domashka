import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './Logo';

storiesOf('Логотип', module)
  .add('Домашка', () => (
    <Logo />
  ))
  .add('кастомный сервис', () => (
    <Logo service="ШРИ" />
  ));
