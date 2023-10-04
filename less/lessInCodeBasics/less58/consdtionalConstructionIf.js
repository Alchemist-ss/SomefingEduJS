// Не сокращённая версия.
// const guessNumber = (number) => {
//     if (number === 42) {
//         return 'You win!'
//     }
//     return 'Try again!'
// }

// Сокращённая версия.
const guessNumber = (number) => number === 42 ? 'You win!' : 'Try again!';
console.log(guessNumber(55))


// Небольшие опыты
// const getTypeOfSentence = (sentence) => {
//     const lastChat = sentence[sentence.length - 1];
//     const lastNuber = sentence.length;
//     const lastLatterBeforSign = sentence[sentence.length - 2]
//     if (lastChat === '?') {
//         return `Question - '?' here: ${lastNuber}, befor ${lastLatterBeforSign}`;
//     } if (lastChat === '!') {
//         return `Exclamation -'!' here: ${lastNuber}, befor ${lastLatterBeforSign}`
//     } if (lastChat === '.') {
//         return `Dot - '.' here: ${lastNuber}, befor ${lastLatterBeforSign}`
//     } if (lastChat === ',') {
//         return `Comma - ',' here: ${lastNuber}, befor ${lastLatterBeforSign}`
//     };
//     return `usual - '' here: ${lastNuber}, befor ${sentence[sentence.length - 1]}`;
// }

// switch (loc)

// console.log(getTypeOfSentence('stkghj'));