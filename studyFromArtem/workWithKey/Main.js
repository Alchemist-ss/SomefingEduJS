const divs = document.querySelector("div")

const span = document.querySelector(".round")
divs.addEventListener("click", () => {
    alert("123231")
})


document.addEventListener("keydown", () => {
    let width = span.offsetWidth;
    let height = span.offsetHeight;

    console.log(width, height)
    span
})