const getLetter = (inputString, numberLetter) => {
    // Моё решение.
    const takeLetter = inputString[numberLetter - 1];
    const examination = numberLetter === 0 || numberLetter > inputString.length ? '' : takeLetter;

    // Решение ChatGPT.
    // const examination = numberLetter > 0 && numberLetter <= inputString.length ? inputString[numberLetter - 1] : '';

    return examination;
};

// Решение на сайте.
// const getLetter = (text, position) => text[position - 1] || '';

console.log(getLetter('Tito', 2))