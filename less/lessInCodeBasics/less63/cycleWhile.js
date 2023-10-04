// Моя программка.
const printNumbers = (initialNumber) => {
  while (initialNumber >= 1) {
    console.log(initialNumber)
    initialNumber = initialNumber - 1;
  }
};

// Программка учителя.
// const printNumbers = (initialNumber) => {
//     let i = initialNumber;
//     while (i >= 1) {
//         console.log(i);
//         i = i - 1;
//     }
//     console.log('finished!');
// };

printNumbers(6)