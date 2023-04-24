Тестовое задание: 

Средствами Vue.js (или Nuxt) собрать частично страницу https://av100.pro/settings

Пояснения к задаче:
Чтобы получить доступ к указанной странице и выполнить задание, необходимо зарегистрироваться. После регистрации используйте эти данные для выполнения задания.

На странице должны быть те блоки, которые описаны ниже. Остальное верстать не обязательно. Основная оценка проекта будет основана на внутренней архитектуре.
Блоки:
- Учетная запись (компания, логин, номер телефона, имя, фамилия)
- Оповещения о новых подборках (только email и выкл)
- Сохранить
Header, Footer и остальные блоки верстать не требуется.

Для авторизации (получения токена для API) необходимо выполнить простой запрос к соответствующему методу API, используя данные, указанные при регистрации. Реализовывать интерфейс авторизации/регистрации не требуется.

Сохранение должно работать только для почты юзера (по PUT), остальные параметры не модифицируемы. 

Требования к функционалу:
Все действия на сайте должны происходить без перезагрузки страницы.
После перезагрузки страницы, изменённые параметры должны быть отображены.
Запросы по API должны быть реализованы через Axios.
Необязательно но будет плюсом:

При реализации SSR, авторизация должна проходить на стороне сервера.
Взаимодействие с данными должно быть реализовано через VUEX.
Что будем оценивать:
Качество кода (должен быть написан понятно и аккуратно, с соблюдением табуляции и прочих элементов написания, без лишних элементов и функций, не имеющих отношения к функционалу тестового задания, снабжен понятными комментариями).
Подход к реализации, итоговую архитектуру.
Что пригодится при выполнении:
Наш swagger (документация, описание методов): https://api.av100.ru/v3/swagger/ui/index#/User
Заголовок X-Api-Key: 8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9
Заголовок X-User-Token: индивидуальный, получить можно через POST /login
Адрес API: https://api.av100.ru/v3/
Методы API:
Методы API которые используются при реализации данного тестового задания.
Авторизация: POST /login
Получение настроек пользователя: GET /user/{userId}
Обновление данных: PUT /user/{userId}
Пожелания
Можно использовать любые библиотеки.

При выполнении тестового задания использовать VUE 2 или Nuxt 2 т.к. в наших проектах используется Nuxt 2.


===================

План реализации: 

1. Создать репозиторий на GitHub 
2. Создать проект с помощью vue-cli 
3. Установить axios 
4. Верстка блока учетной записи. Создать отдельный компонент для инпута и вывести в главный компонент
5. Сделать модуль на vuex для получения токена сессии и id
6. Верстка блока оповещений 
7. Модуль на vuex для получения и обновления профиля 
8. Связать vuex с главным компонентом 
