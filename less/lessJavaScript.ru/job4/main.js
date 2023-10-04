// const buttonAllContent = document.querySelector('.case__for-content');
// const buttonMain = document.querySelector('#buttonMain');
// const buttonSecondary = document.querySelector('#buttonSecondary');
// const textForHidden = document.querySelector('.case__text-for-hidden');

// buttonSecondary.hidden = true;
// textForHidden.hidden = true;

// buttonAllContent.onclick = function () {
//   if (buttonMain.hidden) {
//     buttonMain.hidden = false;
//     buttonSecondary.hidden = true;
//     textForHidden.hidden = true;
//   } else {
//     buttonMain.hidden = true;
//     buttonSecondary.hidden = false;
//     textForHidden.hidden = false;
//   }
// }

let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.case__title');

titleElem.onclick = function () {
  menuElem.classList.toggle('open');
};