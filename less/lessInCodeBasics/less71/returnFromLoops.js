const hasChar = (str, latter) => {
    let i = 0;

    while (i < str.length) {
        if (str[i] === latter) {
            return true;
        }
        i += 1;
    }
    return false;
}

console.log(hasChar('Awesomeness', 'm'))