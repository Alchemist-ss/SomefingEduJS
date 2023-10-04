const joinNumbersFromRange = (text, times) => {
    let i = text;
    let result = '';

    while (i <= times) {
        result = result + i;
        i = i + 1;
    }
    return result;
}

console.log(joinNumbersFromRange(5, 10))

// Какие-топросто наброски, которые не помогли.
// let num = 0;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }
// Выведет:
// 0
// 1
// 2
// 3
// 4