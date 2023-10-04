let buttonRemove = document.querySelectorAll('.case__remove-button');
let caseContent = document.querySelectorAll('.case__content');
let caseMain = document.querySelector('.case');

for (let i = 0; i < caseContent.length; i++) {
  buttonRemove[i].addEventListener('click', function () {
    caseMain.removeChild(caseContent[i]);
  });
}

for (let i = 0; i < caseContent.length; i++) {
  let button = caseContent[i].querySelector(".case__remove-button")
  if (button) {
    caseContent[i].querySelector(".case__remove-button").addEventListener('click', function () {
      caseMain.removeChild(caseContent[i]);
    });

  }
}