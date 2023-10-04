const button = document.querySelector("#hider")

hideButton.addEventListener('click', () => {
  hideButton.hidden = true;
});

// Чтото про иерархию
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);
