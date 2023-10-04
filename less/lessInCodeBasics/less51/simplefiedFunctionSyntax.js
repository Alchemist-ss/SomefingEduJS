// Моя программа
// const capitalize = (stringNoEmpty) => stringNoEmpty.slice(0, 1).toUpperCase() + stringNoEmpty.slice(1);

// То как нужно:
const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

console.log(capitalize('what is it'))