// Моё решение.
const filterString = (str, symbol) => {
    let i = 0;
    let result = '';

    while (i < str.length) {
        if (str[i] !== symbol) {
            result = result + str[i]
            // result = str.replace(new RegExp(str[i], 'g'), '');
        }
        i += 1;
    }
    return result;
}

// Решение учителя.
// const filterString = (str, char) => {
//     let i = 0;
//     let result = '';
//     while (i < str.length) {
//         const currentChar = str[i];
//         if (currentChar !== char) {
//             result = `${result}${currentChar}`;
//         }
//         i += 1;
//     }
//     return result;
// };


console.log(filterString('If I look back I am lost', 'I'))