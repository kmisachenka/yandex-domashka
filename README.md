# Яндекс.Домашка &middot; билд статус

Демо: добавить ссылку

## Что сделано

- [x] Базовая верстка на React [https://github.com/facebook/create-react-app](create-react-app)
- [x] API сервер на Express с использованием TypeSript
- [x] Фронтенд за заметками ходит в API
- [x] Интеграционные тесты с использованием библиотеки [supertest](https://github.com/visionmedia/supertest)
- [x] Модульные тесты (API)
- [x] Проверка линтерами JavaScript(TypeScript) и CSS кода
- [x] Continuous Delivery с помощью travis-ci и heroku (если на CI прошли тесты и линетры - билд выливается на Heroku)
- [x] Настроен Storybook
- [x] Настроен `husky` для проверки кода линтерами и тестами перед коммитом

## Что сделать

- [ ] Посмотреть верстку в других браузерах (В safari криво отображается)
- [ ] Переписать `frontend` на TypeScript
- [ ] Пересмотреть логику компомента Note.jsx (слишком сложно понять что там происходит)
- [ ] Пересмотреть работу с состоянием на клиенте
- [ ] Добавить тестирование снапшотами на клиенте

## Было бы хорошо сделать

- [ ] bem-react
- [ ] Прикрутить MongoDB
- [ ] Написать e2e тесты (Cypress, WebdriverIO, Selenium, etc)

# Основные скрипты

- `build` - Сборка проектов (backend & frontend)
- `start` - Запуск приложения в development режиме
- `test` - Запуск тестов
- `lint` - Запуск линтеров
