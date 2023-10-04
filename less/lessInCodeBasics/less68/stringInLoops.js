// Мой project
const even = (word) => {
    let i = 1;
    let result = '';
    while (i < word.length) {
        result += word[i];
        i = i + 2;
    }

    return result;
};

console.log(even('Kwazimoda'))