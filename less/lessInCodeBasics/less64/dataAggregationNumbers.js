const multiplyNumbersFromRange = (start, finish) => {
    let i = start;
    let result = 1;

    while (i <= finish) {
        result = result * i;
        i = i + 1;
    }
    return result;
}

console.log(multiplyNumbersFromRange(6, 6));