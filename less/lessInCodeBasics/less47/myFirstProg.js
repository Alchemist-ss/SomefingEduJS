const acceptName = prompt('Введите ваше имя:');
const acceptAge = prompt('Введите ваш возраст:');

const parseAge = parseInt(acceptAge);

console.log(`Привет ${acceptName}! Тебе ${parseAge} лет.`)