let numbers = document.querySelectorAll('.numbers')
function jobAlexandr(accept = prompt('Введите число', '')) {
    addzero = 0;
    let result;
    if (accept < 10) {
        result = alert(`Ваше число: ${addzero}${accept}`);
    } else {
        result = alert(`Ваше число: ${accept}`);
    }
}

jobAlexandr()