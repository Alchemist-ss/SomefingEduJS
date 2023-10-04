// Кнопка
const button = document.querySelector('.hrefOnRegPage');

button.addEventListener('click', () => {
  console.log('Кнопка была нажата!');
});

// Слайдер
const buttons = document.querySelectorAll('.slide-choice');
const slides = document.querySelectorAll('.slide');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSlide = button.dataset.slide;
    slides.forEach(slide => {
      slide.style.display = slide.id === targetSlide ? 'flex' : 'none';
    });
    console.log('Кнопка была нажата!');
  });
});