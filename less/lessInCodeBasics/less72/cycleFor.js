const encrypt = (inputMessage) => {
    let result = '';

    for (let i = 0; i < inputMessage.length; i += 2) {
        const currentChar = inputMessage[i];
        const nextChar = inputMessage[i + 1];

        if (nextChar !== '') {
            result += nextChar + currentChar;
        } else {
            result += currentChar;
        }
    }

    return result;
}

// const encrypt = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i += 2) {
//         const nextSymbol = str[i + 1] || '';
//         result = `${result}${nextSymbol}${str[i]}`;
//     }

//     return result;
// };

console.log(encrypt('move')); // Выведет 'omev'
