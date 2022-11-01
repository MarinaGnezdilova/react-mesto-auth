# Проект Mesto React
## Описание проекта:
Схожая функциональность реализовывалась на чистом js. Данный проект это рефакторинг кода с использованием ReactJS.
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
 https://marinagnezdilova.github.io/react-mesto-auth/

## Статус проекта:
Завершен

## Доступные скрипты:
В директории проекта можно запустить: npm start .
Приложение будет доступно в режиме разработки по адресу http://localhost:3000

