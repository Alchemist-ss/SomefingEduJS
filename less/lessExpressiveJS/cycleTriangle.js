// Мой кодик.
function cycleTriangle() {
  let space = '       ';
  let hashtag = '#######';
  for (var i = 0; i <= 7; i++) {
    console.log(space.slice(i) + hashtag.slice(0, i) + hashtag.slice(0, i));
  };
}


// ChatGPT:
// function cycleTriangle() {
//   for (let i = 0; i <= 7; i++) {
//     console.log(' '.repeat(7 - i) + '#'.repeat(i) + '#'.repeat(i));
//   }
// }


// Минимальное решение:
// for (let line = "#"; line.length < 8; line += "#")
// console.log(line);

cycleTriangle()