# Личный проект «Шесть городов»
### [Публикая в интернете](https://125174-six-cities-13.vercel.app/)

В приложении можно получить актуальный список предложений по аренде в одном из шести 
популярных городов. Сортировка объектов и подробное описание каждого из них помогут 
быстро выбрать оптимальный вариант жилья. Авторизованные пользователи могут оставлять 
отзыв под каждым предложением.

> В проекте использованы следующие технологии:

<img width="50" height="50" title="html5" src="./public/icons/html5-plain-wordmark.svg">&nbsp;&nbsp;&nbsp;
<img width="50" height="50" title="css3" src="./public/icons/css3-plain-wordmark.svg">&nbsp;&nbsp;&nbsp;
<img width="50" height="50" title="typescript" src="./public/icons/typescript-plain.svg">&nbsp;&nbsp;&nbsp;
<img width="50" height="50" title="sass" src="./public/icons/sass-original.svg">&nbsp;&nbsp;&nbsp;
<img width="50" height="50" title="react" src="./public/icons/react-original.svg">&nbsp;&nbsp;&nbsp;
<img width="50" height="50" title="redux" src="./public/icons/redux-original.svg">&nbsp;&nbsp;&nbsp;
<img width="50" height="50" title="vite" src="./public/icons/vite.png">&nbsp;&nbsp;&nbsp;
<img width="50" height="50" title="vitest" src="./public/icons/vitest.svg">&nbsp;&nbsp;&nbsp;
<img width="50" height="50" title="testing library" src="./public/icons/octopus-64x64.png">&nbsp;&nbsp;&nbsp;

- TypeScript;
- React Router;
- Redux;
- React Hooks;
- Axios;
- Redux-thunk;
- Redux Toolkit;
- Vitest;
- React Testing Library.

---


### Описание функциональности

##### 1.1. Страницы приложения

Приложение состоит из нескольких страниц: Main (/), Login (/login), Favorites (/favorites) (приватная), Offer (/offer/:id).

Страница Favorites доступна только авторизованным пользователям.

Если пользователь авторизован, то при переходе на страницу Login выполняется перенаправление на главную страницу.

Если пользователь не авторизован, то при попытке перехода к приватной странице выполняется перенаправление на страницу «Login» (/login).

В шапке каждой страницы отображается ссылка на страницу «Login» (если пользователь не авторизован) или email пользователя и кнопка «Log Out» (если пользователь авторизован).

Клик по кнопке «Log Out» приводит к завершению сеанса работы — выходу из закрытой части приложения.

Клик по email пользователя в шапке выполняет переход на страницу «Favorites» (/favorites).

Обращение к несуществующей странице (например, через адресную строку) не приводит к появлению ошибок в приложении, а корректно обрабатывается маршрутизацией. Пользователь перенаправляется на страницу «404». Дизайн страницы остаётся на усмотрение студента. В самом простом случае это может быть страница с текстом 404 Not Found и ссылкой для перехода на главную страницу приложения.

##### 1.1.1. Главная страница

На главной странице отображается список городов, для которых возможно запросить предложения по аренде: Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf.

Сервер всегда возвращает информацию только для этих шести городов.

После загрузки приложения всегда активен сразу первый город из списка на главной странице — Paris. По этому городу загружены предложения по аренде.

На карте предложения отображаются в виде синих маркеров.

При смене города выполняется обновление списка предложений и карта.

В заголовке списка предложений отображается количество доступных предложений. Пример корректного заголовка: 312 places to stay in Amsterdam.

Кнопка «Избранное» каждого предложения. Клик по кнопке «Избранное» добавляет карточку в избранное. Повторный клик по кнопке «Избранное» выполняет обратное действие — удаляет из избранного. Если пользователь не авторизован, то выполняется перенаправление на страницу Login. Иконка на кнопке меняется в зависимости от действия: добавить в избранное (прозрачная), удалить из избранного (синяя).

##### 1.1.1.1. Список предложений

Пользователь может менять сортировку списка предложений. Варианты сортировки:

Popular. Вариант по умолчанию. Предложения отображаются в порядке, полученном с сервера.
Price: low to high. От дешёвых к дорогим.
Price: high to low. От дорогих к дешёвым.
Top rated first. От высокого рейтинга к низкому. По умолчанию выпадающее меню для выбора варианта сортировки закрыто. Открытие меню происходит при нажатии на выбранный пункт сортировки. Закрытие меню происходит при выборе варианта сортировки.
При смене варианта сортировки список предложений перерисовывается.

Каждая карточка в списке предложений содержит информацию:

Изображение. Фотография жилья.
Премиальность. Метка «Premium».
Стоимость за ночь. Стоимость всегда отображается в евро.
Заголовок. Краткое описание предложения. Например: «Beautiful & luxurious apartment at great location».
Тип жилья. Одно из нескольких значений: apartment, room, house, hotel.
Кнопка «Избранное». Клик по кнопке «Избранное» добавляет карточку в избранное. Если пользователь не авторизован, то выполняется перенаправление на страницу Login.
Рейтинг. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5. Оценка округляется до ближайшего целого. Например, оценка 3.1 округляется до 3-х. Оценка 4.5 округляется до 5.
Клик по заголовку карточки выполняет переход на страницу с подробной информацией о предложении.

Адрес страницы с подробной информацией о предложении выглядит следующим образом: /offer/:id, где id идентификатор предложения. Например, /offer/1704.

Если предложения отсутствуют, то в списке отображается надпись «No places to stay available», а вместо карты отображается статичное изображение. См. пример соответствующей страницы макета.

##### 1.1.1.2. Карта

Все предложения выбранного города отображаются на карте в виде синих маркеров.

При наведении курсора на карточку предложения, маркер, соответствующий объявлению, становится оранжевым. Пункт справедлив только для главной страницы, на странице предложения цвет маркера изменяться не должен.

##### 1.1.2. Страница предложения

На странице предложения (/offer) представлена расширенная информация об объекте для аренды:

Фотографии. Выводится до 6-ти изображений. Если фотографий больше, выводятся первые 6.
Заголовок. Краткое описание предложения, например: «Beautiful & luxurious studio at great location».
Подробное описание.
Премиальность.
Тип жилья. Одно из предопределённых значений: apartment (Apartment), room (Room), house (House), hotel (Hotel).
Рейтинг. Оценка предложения отображается в виде закрашенных звезд и среднего балла (например, 4.8). Максимальное количество звёзд — 5. Оценка предложения в виде закрашенных звёзд округляется до ближайшего целого. Например, оценка 3.1 округляется до 3-х. Оценка 4.5 округляется до 5. Средний бал не округляется.
Количество спален. Например, 3 Bedrooms (множественное число, если спален несколько) или 1 Bedroom (единственное число, если спальня одна).
Максимальное количество гостей. Например, Max 4 adults (множественное число, если гостей несколько) или Max 1 adult (единственное число, если гость один).
Стоимость аренды за ночь. Сумма всегда отображается в евро.
Список бытовых предметов в квартире (Wifi, Heating, Kitchen, Cable TV и т. д.);
Информация о хозяине: аватарка, имя, отметка pro (звёздочка возле аватарки) и подпись Pro под именем хозяина.
Кнопка «Избранное». Клик по кнопке «Избранное» добавляет карточку в избранное. Если пользователь не авторизован, то выполняется перенаправление на страницу Login.

Отзывы пользователей. В заголовке блока отображается общее количество отзывов. Например: Reviews 12.

Для авторизованных пользователей отображается форма отправки нового отзыва.

Под списком отзывов отображается карта с предложениями неподалёку. На карте отмечено 3 первых предложения неподалёку и маркер текущего предложения (итого 4 маркера). Маркеры предложений выделены синим. Маркер текущего предложения выделен оранжевым. Другая функциональность для карты с предложениями неподалёку не предусмотрена.

Карточки представленных предложений отображаются сразу под картой и содержат тот же набор информации, что и на главной странице.

##### 1.1.2.1. Отзывы

Каждый отзыв содержит:

Аватар автора.
Имя автора.
Оценку. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5.
Дата отзыва в формате: Месяц Год. Например: April 2019.
Текст отзыва.
В заголовке блока отображается общее количество отзывов.

На страницу выводится не больше 10 отзывов.

Отзывы должны быть отсортированы от новых к старым (новые сверху).

##### 1.1.2.2. Форма отправки отзыва

Форма отправки отзыва отображается только для авторизованных пользователей.

Пользователь должен выставить рейтинг. Рейтинг выставляется от 1 до 5.

Для выбора рейтинга пользователь отмечает соответствующее количество звёзд.

Текст отзыва должен содержать от 50 до 300 символов.

Пока пользователь не выбрал оценку и не ввёл текст допустимой длины, кнопка отправки отзыва не активна.

При нажатии кнопки «Submit» и отправке данных кнопка «Submit» и вся форма должны блокироваться. Разблокировка формы и кнопки происходит в случае успешной отправки или при возникновении ошибки.

В случае успешной отправки отзыва форма очищается.

В случае возникновения ошибки следует уведомить пользователя. Способ отображения ошибки остаётся на усмотрение разработчика.

Пользователь может оставить любое количество отзывов.

##### 1.1.3. Страница Login

Для входа в сервис пользователь вводит логин (email) и пароль. Поскольку у сервиса отсутствует возможность регистрации, логин и пароль могут быть любыми, но не пустыми.

В поле «логин» должен вводится корректный email (для проверки достаточно установить соответствующий type для поле ввода).

В поле «пароль» должен вводится валидный пароль. Под валидным паролем подразумевается пароль, который состоит минимум из одной буквы и цифры.

Страница доступна только неавторизованным пользователям. Авторизованных пользователей перенаправляет на главную страницу.

##### 1.1.4. Favorites

Страница «Favorites» доступна только авторизованным пользователям. Если пользователь не авторизован, то выполняется перенаправление на страницу «Login».

Переход на страницу «Favorites» осуществляется при клике на email авторизованного пользователя.

Данные для страницы «Favorites» всегда загружаются с сервера. Для этого предусмотрен отдельный маршрут (см. раздел «Взаимодействие с сервером»).

На странице «Favorites» отображаются все предложения, которые пользователь добавил в избранное. Предложения группируются по городам.

Если пользователь не добавил ни одного предложения в избранное, то на странице отображается «Nothing yet saved» (см. макет).

На странице «Favorites» пользователь может удалить предложение из избранного. Удаление осуществляется нажатием на кнопку «Избранное».

После удаления предложения из избранного, список предложений актуализируется (удалённое предложение пропадает).

В шапке, рядом с email авторизованного пользователя, отображается количество предложений, добавленных в избранное. Добавление предложения в избранное, или удаление предложения из избранного, приводит к немедленному пересчёту количества предложений.

##### 1.1.5. Разное

В зависимости от состояния, некоторым элементам управления применяются соответствующие классы оформления. Например, активный фильтр и так далее. Примеры доступны в директории с вёрсткой (markup).

#### `2. Взаимодействие с сервером`
Все необходимые данные загружаются с сервера.
Сервер доступен по адресу: https://13.design.htmlacademy.pro/six-cities.
Спецификация по взаимодействию с сервером в формате OpenAPI — https://13.design.pages.academy/spec/six-cities.
В случае недоступности сервера отображается информационное сообщение. Дизайн сообщения остаётся на усмотрение разработчика.
Сервер принимает данные в виде JSON-объекта.
Авторизация на сервере происходит на основании токена. Токен передаётся с каждым запросом в заголовке X-Token.
Токен сохраняется в localStorage под именем six-cities-token.

#### `3. Дополнительно`
Покройте код проекта тестами. Напишите тесты для всех компонентов, редьюсеров, асинхронных операций.
В правой части страницы «Login» отображается кнопка для быстрого перехода к списку предложений по аренде в этом городе. Город для быстрого перехода определяется случайным образом. Клик по кнопке перенаправляет пользователя на главную страницу и устанавливает фильтр в соответствии с выбранным городом.
