import React from 'react';
import { storiesOf } from '@storybook/react';
import ListSection from './ListSection';
import Provider from '../../reduxProvider';

storiesOf('Список', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('со списком', () => {
    const note = {
      type: 'list',
      title: 'Список покупок',
      tags: [0],
      color: 0,
      items: [
        {
          text: 'Оливочки',
          checked: false,
        },
        {
          text: 'Макароны',
          checked: false,
        },
        {
          text: 'Яйца',
          checked: true,
        },
        {
          text: 'Сливки',
          checked: false,
        },
        {
          text: 'Хлеб',
          checked: true,
        },
        {
          text: 'Чеснок',
          checked: false,
        },
        {
          text: 'Сыр',
          checked: true,
        },
        {
          text: 'Помидорки',
          checked: false,
        },
        {
          text: 'Ветчина',
          checked: true,
        },
        {
          text: 'Чай',
          checked: true,
        },
        {
          text: 'Огурец',
          checked: false,
        },
        {
          text: 'Масло сливочное',
          checked: true,
        },
        {
          text: 'Вино',
          checked: true,
        },
        {
          text: 'Камамбер',
          checked: true,
        },
        {
          text: 'Сыр фета',
          checked: true,
        },
        {
          text: 'Васаби',
          checked: true,
        },
        {
          text: 'Соевый соус',
          checked: true,
        },
        {
          text: 'Вкусняшки',
          checked: false,
        },
        {
          text: 'Красный имбирь',
          checked: true,
        },
        {
          text: 'Гвоздика',
          checked: true,
        },
        {
          text: 'Кардамон',
          checked: true,
        },
        {
          text: 'Овсяные хлопья',
          checked: true,
        },
        {
          text: 'Пельмени',
          checked: true,
        },
        {
          text: 'Сметана',
          checked: true,
        },
      ],
      size: 'l',
      created: 1551780000000,
    };

    return <ListSection note={note} />;
  });
