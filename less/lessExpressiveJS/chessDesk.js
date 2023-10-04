// Моё решение
function chessDesk() {
  let craft = '';
  let empty = '';
  let space = ' ';
  let hashtag = '#';

  for (let i = 1; i <= 4; i++) {
    empty += space + hashtag;
    craft += hashtag + space;
    result = craft + '\n' + empty + '\n'
  }
  console.log(result.repeat(4));
}
chessDesk()

// Как должно быть
// function chessDesk(size) {
//   let board = "";

//   for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//       if ((x + y) % 2 == 0) {
//         board += " ";
//       } else {
//         board += "#";
//       }
//     }
//     board += "\n";
//   }

//   console.log(board);
// }
// chessDesk(8)