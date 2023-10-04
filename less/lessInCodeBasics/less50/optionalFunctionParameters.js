// Мой код:
//
// const getHiddenCard = (numberCard, sumHiding = 4, hiding = "*") => {
//     return hiding.repeat(sumHiding) + numberCard.slice(12);
// }

// Боллее читаемо и правильнее:
//
// const getHiddenCard = (cardNumber, starsCount = 4) => {
//     const visibleDigitsLine = cardNumber.slice(12);
//     return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
// };

//Самый компактный и локаничный код:
const getHiddenCard = (cardNumber, starsCount = 4) => `${'*'.repeat(starsCount)}${cardNumber.slice(12)}`;

console.log(getHiddenCard('2034399002125581'));