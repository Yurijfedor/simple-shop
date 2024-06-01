# simple-shop

## Опис

Проект містить наступні функції:

- Перегляд списку товарів у магазині
- Додавання товарів у кошик
- Перегляд та зміна кількості товарів у кошику
- Перегляд історії покупок
- Авторизація через Google

## Встановлення

Для встановлення та запуску проекту на вашому локальному комп'ютері вам потрібно виконати наступні кроки:

- Клонуйте репозиторій:
  git clone https://github.com/Yurijfedor/simple-shop.git
- Перейдіть до папки проекту:
  cd simple-shop
- Встановіть залежності за допомогою npm або yarn:
  npm install
- Створіть файл .env у корені проекту та введіть в нього наступні дані:

* FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
* FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
* FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
* FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
* FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
* FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID

- Замініть YOUR_FIREBASE_API_KEY, YOUR_FIREBASE_AUTH_DOMAIN, YOUR_FIREBASE_PROJECT_ID, YOUR_FIREBASE_STORAGE_BUCKET, YOUR_FIREBASE_MESSAGING_SENDER_ID, YOUR_FIREBASE_APP_ID на власні дані з вашого проекту Firebase.

## Запустіть проект:

npm start
Проект запуститься на http://localhost:3000/.
