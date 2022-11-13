/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

function doProbability(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let list = [
    "Тебе сегодня напишет тот, от которого ждешь сообщения",
    "Сегодня тебя ждет чудесный день",
    "Если ты ждала знака, то это он",
    "Ты заслуживашь все лайки инстаграма",
    "Ты со всем справишься, ты всегда со всем справлялась",
    "Ты найдешь решение задачи, которая тебя давно мучает",
    "Тот милый бариста приготовит бесплатный кофе"
];

let prediction = null;
let probability = null;

const button = document.querySelector('.forecast-btn');
button.addEventListener('click', function() {

    if (prediction != null) {
        const template = document.querySelector('#forecast-item');
        const clone = template.content.cloneNode(true);
        clone.querySelector('h3').textContent = prediction;
        clone.querySelector('p').textContent = `Вероятность: ${probability}%`;
        const container = document.querySelector('.forecasts');
        container.prepend(clone);
    }


    prediction = list[Math.floor(Math.random() * 7)];
    probability = doProbability(0, 100);

    document.querySelector('.current-forecast h1').textContent = prediction;
    document.querySelector('.current-forecast p').textContent = `Вероятность: ${probability}%`;



})