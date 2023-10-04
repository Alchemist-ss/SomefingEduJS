// Мои попытки:
const printReversedWordBySymbol = (word) => {
    let i = 0;
    const wordReverse = word.split('').reverse().join('');

    while (i < word.length) {
        console.log(wordReverse[i]);
        i = i + 1;
    }
};

// Как это можно решить по другому:
// const printReversedWordBySymbol = (word) => {
//     let i = word.length - 1;
// 
//     while (i >= 0) {
//         console.log(word[i]);
//         i = i - 1;
//     }
// };

printReversedWordBySymbol('Kvazar');
