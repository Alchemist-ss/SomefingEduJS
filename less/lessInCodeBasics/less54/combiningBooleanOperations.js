// Моя программка
const isInternationalPhone = (numberPhone, correctNumber = '+') => numberPhone[0] === correctNumber;

// Не додумался до этого ...
// const isInternationalPhone = (phone) => phone[0] === '+'; // Небольшая затравочка от Артёма ( || phone[0] === '-' ) - можно использовать как нибудь.

// console.log(isInternationalPhone('879602223423')) // false
console.log(isInternationalPhone('779602223423')) // true
