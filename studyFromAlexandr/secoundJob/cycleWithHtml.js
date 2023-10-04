// Создаём переменную с классом из html
const myDiv = document.querySelector('.myDiv');
// Объявляем переменную с пустым стрингом.
let result = '';

function htmlAccept(input = prompt('Введите своё число', '')) {
  // Обработчик для сценария с 0
  if (input == 0) alert('Вы ввели: 0');
  // Обработчики для кнопки "Отмена" у "prompt"
  if (input === null) alert('Вы нажали отмену!');
  // Обработчик для минусового значения
  if (input < 0) alert('Вы ввели минусовое значение')

  // Цикл для отображения если 1-9 будет 01 - 09. i > 10 то будет: 10, 11 ...
  for (i = 1; i <= input; i++) {
    i < 10 ? result += `<div>0${i}</div>` : result += `<div>${i}</div>`;
  }
  // Записываем в html а .innerHTML - корректно выводит.
  myDiv.innerHTML = result;
  // Если использовать .textContent - будет <div>01</div><div>02</div>...
}

htmlAccept();