# 1. Yandex praktikum sprint 14
Andrey Korlyakov  

## 2. Актуальная версия  
V 1.2.0

## 3. Описание спринта  
Создание сервера с помощью фреймворка Express. Работа с Eslint. Работа с NoSQL базой данных MongoDB. Реализация взаимодействия базы данных и сервера посредством mongoose. Реализация авторизации и регистрации. 
Реализован следующий функционал:  

*12 спринт:*
- реализована раздача статики  
- реализованы `GET` запросы:
  - `/users` - получение списка пользователей  
  - `/user/id` - получение пользователя по id  
  - `/cards` - получение массива с карточками  
- реализованы следующие обработки ошибок:
  - `/user/nonexistentUser` => `{ "message": "Нет пользователя с таким id" }` Несуществующий юзер
  - `/nonexistentReq` => `{ "message": "Запрашиваемый ресурс не найден" }` Несуществующий запрос  
 
 *13 спринт:*
- убрана статика
- реструктурирован код
- `GET /users` — возвращает всех пользователей
- `GET /users/:userId` - возвращает пользователя по _id
- `POST /users` — создаёт пользователя
- `GET /cards` — возвращает все карточки
- `POST /cards` — создаёт карточку
- `DELETE /cards/:cardId` — удаляет карточку по идентификатору
- `PATCH /users/me` — обновляет профиль
- `PATCH /users/me/avatar` — обновляет аватар
- `PUT /cards/:cardId/likes` — поставить лайк карточке
- `DELETE /cards/:cardId/likes` — убрать лайк с карточки

 *14 спринт:*  
- В схеме пользователя есть обязательные email и password;
- Поле email уникально и валидируется;
- В контроллере createUser почта и хеш пароля записываются в базу;
- Есть контроллер login, он проверяет, полученные в теле запроса почту и пароль;
- Если почта и пароль верные, контроллер login создаёт JWT, в пейлоуд которого записано свойство _id с идентификатором пользователя; срок жизни токена — 7 дней;
- Если почта и пароль верные, контроллер login возвращает созданный токен в ответе;
- Если почта и пароль не верные, контроллер login возвращает ошибку 401;
- В app.js есть обработчики POST-запросов на роуты /signin и /signup;
- Есть файл middlewares/auth.js, в нём мидлвэр для проверки JWT;
- При правильном JWT авторизационный мидлвэр добавляет в объект запроса пейлоуд и пропускает запрос дальше;
- При неправильном JWT авторизационный мидвэр возвращает ошибку 401;
- Псе роуты, кроме /signin и /signup, защищены авторизацией;
- Удалён хардкод req.user из самостоятельного проекта предыдущего спринта;
- Пользователь не может удалить карточку, которую он не создавал;
- API не возвращает хеш пароля;
- Пользователь не может редактировать чужой профиль и не может менять чужой аватар.
## 4. Установка  
`git clone https://github.com/yletfull/spr14 master`

## 5. Подключенные библиотеки
- `body-parser`: 1.19.0,
- `express`: 4.17.1,
- `eslint`: 7.2.0,
- `eslint-config-airbnb-base`: 14.2.0,
- `eslint-plugin-import`: 2.21.2,
- `nodemon`: 2.0.4
- `mongoose`: 5.9.20
- `bcrypt`: 5.0.0
- `helmet`: 3.23.2
- `jsonwebtoken`: 8.5.1
- `express-rate-limit`: 5.1.3
- `validator`: 13.1.1