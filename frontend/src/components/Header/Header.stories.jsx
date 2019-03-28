import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Блок: Хедер', module)
  .add('мобильная версия', () => <Header />,
    { viewport: { defaultViewport: 'iphonex' } })
  .add('десктопная версия', () => <Header />,
    { viewport: { defaultViewport: 'desktop' } });
