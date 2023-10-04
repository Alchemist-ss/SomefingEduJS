// const truncate = (text, length) => {
//     return text.slice(0, length) + "...";
// };

//  Моя переделка
const truncate = (text, length) => `${text.slice(0, length)}...`;


console.log(truncate('text var near', 3));