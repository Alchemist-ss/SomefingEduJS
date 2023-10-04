const number = prompt('Введите число:');
const operation = prompt('Введите операцию (square - квадрат числа, cube - куб числа):');

// Необходимо дописать код для выполнения задачи
const parseNumber = parseInt(number);

// Обычный if and else
// let result;
// if (operation === 'square') {
//     result = parseNumber * parseNumber;
// } else if (operation === 'cube') {
//     result = parseNumber * parseNumber * parseNumber;
// } else {
//     result = 'Некореткная операция';
// }

// Тернарный оператор
let result = operation === 'square' ? Math.pow(parseNumber, 2) : operation === 'cube' ? Math.pow(parseNumber, 3) : 'Некорректная операция';

// Вывод результата в консоль или на страницу
alert(`Результат: ${result}`);