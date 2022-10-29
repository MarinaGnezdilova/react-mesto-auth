# Проект Mesto React
## Описание проекта:
Схожая функциональность реализовывалась на чистом js. Данные проект это рефакторинг кода с использованием ReactJS.
Вся функциональность приложения доступна только авторизованным пользователям по роуту /. Есть два дополнительных роута для неавторизованных пользователей:
    /signup — для регистрации пользователя;
    /signin — для авторизации пользователя.
 Если неавторизованный пользователь приходит на сайт, он попадает на страницу входа, на какой бы роут он ни пришёл.
 При повторном открытии страницы приложения данные о входе сохраняются пользователю не нужно вводить логин и пароль повторно.

При открытиии страницы / с сервера подтягиваются данные профиля (аватар, имя, информация о пользователе). Также с сервера забираются карточки с фотографиями и кол-вом лайков.
Что может сделать пользователь на странице:
1. Добавить новую фотографию интересного места. При добавлении открывается попап с формой с полями название места и ссылкой на фотографию.
2. Отредактировать аватар и другие данные профиля.
3. Удалить карточки, которые добавлял он.
4. Поставить или снять свой лайк с карточки.
5. Открыть попап карточки с изображением и заголовком.
6. Выйти из приложения

## Используемые технологии:
HTML, CSS, ReactJS.
+ ReactJS - в проекте используются хуки useState, useEffect. Роуты релизованы на react-router-dom: 5.2.1.
+ Для работы с сервером реализованы методы с HTTP запросами, реализована асинхронная работа кода.

## Ссылка на проект:
https://marinagnezdilova.github.io/mesto/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
