// Функция для ревёрса строк
function reverse(str) {
    return str.split('').reverse().join('');
}

// Моя программка:
// const convertText = (stringInput,) => {
//     if (stringInput === '') {
//         return '';
//     } else if (stringInput[0] !== stringInput[0].toUpperCase()) {
//         return reverse(stringInput);
//     } else {
//         return stringInput;
//     }
// }
// console.log(convertText('cat'))

// Решение учителя, тут невозможно сократить if.
const convertText = (text) => {
    if (text === '') {
        return '';
    }

    const reversable = text[0] !== text[0].toUpperCase();
    return reversable ? reverse(text) : text;
};

console.log(convertText('cat'))