# Яндекс.Домашка &middot; [![Build Status](https://travis-ci.com/kmisachenka/yandex-domashka.svg?token=xrh736JcsE4kMVB1sCn3&branch=master)](https://travis-ci.com/kmisachenka/yandex-domashka)

Демо: [https://yandex-domashka.herokuapp.com/](https://yandex-domashka.herokuapp.com/)

## Что сделано

- [x] Базовая верстка на [React](https://github.com/facebook/create-react-app)
- [x] API сервер на Express с использованием TypeSript
- [x] Фронтенд за заметками ходит в API
- [x] [Интеграционные тесты](backend/src/notes/notes.spec.ts) с использованием библиотеки [supertest](https://github.com/visionmedia/supertest)
- [x] [Модульные тесты (API)](backend/src/notes/repositories/Notes.test.ts)
- [x] Проверка линтерами JavaScript(TypeScript) и CSS кода
- [x] Continuous Delivery с помощью [travis-ci](.travis.yml) и [heroku](Procfile) (если на CI прошли тесты и линетры - билд выливается на Heroku)
- [x] Настроен Storybook
- [x] Настроен `husky` для проверки кода линтерами и тестами перед коммитом

## Что сделать

- [x] Показывать Spinner во время загрузки заметок
- [x] На этапе сборки вырезать локали `momentjs` (_Заменил на библиотеку Luxon_)
- [ ] Посмотреть верстку в других браузерах (Есть косяки)
- [ ] Добавить анимаций, а то скучновато выглядит
- [ ] Переписать `frontend` на TypeScript
- [x] Добавить взаимодействие с API (POST, PUT, PATCH)
- [ ] Пересмотреть логику компомента Note.jsx (слишком сложно понять что там происходит)
- [x] Пересмотреть работу с состоянием на клиенте
- [x] Добавить тестирование снапшотами на клиенте

## Было бы хорошо сделать

- [ ] [bem-react](https://github.com/bem/bem-react)
- [ ] Прикрутить MongoDB - бесплатно на [MLab](https://mlab.com/)
- [x] Написать e2e тесты (Cypress, WebdriverIO, Selenium, etc)
- [ ] Посмотреть как Slack и Facebook отображают UI когда загружаются данные - заменить Spinner на это

# Основные скрипты

- `build` - Сборка проектов (backend & frontend)
- `start` - Запуск приложения в development режиме
- `test` - Запуск unit и integration тестов
- `test:e2e`- Запуск e2e тестов
- `lint` - Запуск линтеров
