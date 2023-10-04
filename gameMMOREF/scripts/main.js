const elements = {
  person: {
    element: document.querySelector('#person'),
    clicked: false,
  },
  pet: {
    element: document.querySelector('#pet'),
    clicked: false,
  },
};

// Функция для обработки выбора элемента
function selectedElement(elementName) {
  const { element, clicked } = elements[elementName];
  const defaultBg = element.dataset.defaultBg;
  const defaultBorder = element.dataset.defaultBorder;

  if (!clicked) {
    // Установка стилей для выбранного элемента при первом клике
    element.style.backgroundColor = '#D1F6B7';
    element.style.borderColor = '#77dd77';
    elements[elementName].clicked = true;
  } else {
    // Возвращаем цвет по умолчанию при втором клике
    element.style.backgroundColor = '';
    element.style.borderColor = '';
    elements[elementName].clicked = false;
  }
};
// Обработчик события "click"
elements.person.element.addEventListener('click', () => selectedElement('person'));
elements.pet.element.addEventListener('click', () => selectedElement('pet'));


// Обработчик события "click" для кнопки "Save and next"
document.querySelector('.main__button-save').addEventListener('click', processingHref);


function processingHref() {
  // Переменные для хранения состояния выбранного элемента
  const isPersonSelected = elements.person.clicked;
  const isPetSelected = elements.pet.clicked;
  let button = document.querySelector('.main__button-save');

  if (isPersonSelected && isPetSelected) {
    // Ссылка на игру вместе с питомцем.
    button.href = "page/gameWithPet.html";
  } else if (isPersonSelected) {
    // Ссылка на игру одному.
    button.href = "page/gameWithPet.html";
  } else if (isPetSelected) {
    // Ссылка на страницу с уведомлением о том что вы не можете играть животным.
    button.href = "page/gameWithPet.html";
  } else {
    // Если не выбранно ничего.
    button.href = "page/gameWithPet.html";
  }
}
