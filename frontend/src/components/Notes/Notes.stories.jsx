import React from 'react';
import { storiesOf } from '@storybook/react';
import Notes from './Notes';

import Provider from '../reduxProvider';

storiesOf('Заметки', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('мобильная версия', () => {
    const notes = [
      {
        type: 'list',
        title: 'Список покупок',
        tags: [0],
        color: 0,
        reminder: 1552640400000,
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
      },
      {
        type: 'text',
        title: 'Завтра дедлайн',
        text: 'Не забыть сверстать макет',
        tags: [1, 2],
        reminder: 1552640400000,
        color: 2,
        size: 's',
        created: 1551714600000,
      },
      {
        type: 'text',
        text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
        tags: [0],
        reminder: 1552640400000,
        size: 's',
        created: 1551593220000,
      },
      {
        type: 'text',
        title: 'Генератор котов',
        attachments: [
          {
            type: 'link',
            url: 'https://thiscatdoesnotexist.com',
          },
        ],
        size: 's',
        created: 1551529380000,
      },
      {
        type: 'text',
        title: 'Нагенерил смешных котов',
        text:
          'Американец научил нейросети генерировать фото кошек. Получилось не оч',
        attachments: [
          {
            type: 'image',
            url:
              'https://avatars.mds.yandex.net/get-pdb/1816426/93eab951-b130-4cf9-98d6-01e250be5530/orig',
          },
          {
            type: 'image',
            url:
              'https://avatars.mds.yandex.net/get-pdb/1823123/fc6cf893-91b5-4e80-9f02-82acfc6fe30c/orig',
          },
          {
            type: 'image',
            url:
              'https://avatars.mds.yandex.net/get-pdb/1816426/c68f1a18-f763-4a98-8a17-f7d7725753b6/orig',
          },
        ],
        tags: [3, 4],
        color: 4,
        size: 'm',
        created: 1551265200000,
      },
      {
        type: 'text',
        title: 'Скидки в Виталюре',
        text: 'На филе лосося и картоху',
        tags: [0],
        size: 'm',
        reminder: 1552640400000,
        created: 1550653200000,
      },
      {
        type: 'text',
        text:
          'Реферат до 2 апреля (300 терминов, аннотация, основная, заключение, список литературы)\nПеревод 40к знаков к зачету, 40к к экзамену\nТест 1 и 2\n\nПодготовка кадров зарубежом (юнит 2)\nНаучно исследовательская работа магистранта (юнит 2)\nРоль науки (юнит 1)\n10-15 предложений минимум',
        tags: [5, 6],
        color: 1,
        size: 'm',
        created: 1549189500000,
      },
      {
        type: 'image',
        url:
          'https://avatars.mds.yandex.net/get-pdb/1534889/a869b7ef-32da-41e7-8703-326ae860e67f/orig',
        tags: [3],
        size: 'm',
        created: 1548969900000,
      },
      {
        type: 'text',
        title: 'Выучить латынь',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: [7, 8],
        size: 'l',
        created: 1543798200000,
      },
      {
        type: 'text',
        text: 'Теперь ищу только в яндексе',
        attachments: [
          {
            type: 'link',
            url: 'https://yandex.ru',
          },
          {
            type: 'link',
            url: 'https://ya.ru',
          },
        ],
        tags: [1],
        size: 's',
        created: 1536310800000,
      },
      {
        type: 'text',
        title: 'Не забыть выгулять Сиба-Ину',
        color: 3,
        size: 's',
        created: 1520160803000,
      },
    ];
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
    return <Notes notes={notes} colors={colors} />;
  });
