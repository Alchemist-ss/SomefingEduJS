const button = document.querySelector("#hider")
let text = document.querySelector("#text")

button.addEventListener('click', () => {
  text.hidden = true;
});