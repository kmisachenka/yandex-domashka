import React from 'react';
import { storiesOf } from '@storybook/react';
import Note from './Note';
import Provider from '../reduxProvider';

const colors = [
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
];

storiesOf('Заметка', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('Завтра дедлайн', () => {
    const note = {
      type: 'text',
      title: 'Завтра дедлайн',
      text: 'Не забыть сверстать макет',
      tags: [1, 2],
      color: 2,
      size: 's',
      created: 1551714600000,
    };

    return <Note colors={colors} note={note} />;
  })
  .add('Купить чайник', () => {
    const note = {
      type: 'text',
      text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
      tags: [0],
      size: 's',
      created: 1551714600000,
    };

    return <Note colors={colors} note={note} />;
  })
  .add('Сиба-Ин', () => {
    const note = {
      type: 'text',
      title: 'Не забыть выгулять Сиба-Ину',
      color: 3,
      size: 's',
      created: 1520160803000,
    };

    return <Note colors={colors} note={note} />;
  })
  .add('Выучить латынь', () => {
    const note = {
      type: 'text',
      title: 'Выучить латынь',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [7, 8],
      size: 'l',
      created: 1543798200000,
    };

    return <Note colors={colors} note={note} />;
  });
