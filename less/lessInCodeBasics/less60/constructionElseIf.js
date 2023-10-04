const whoIsThisHouseToStarks = (input) => {
    const friend = ['Karstark', 'Tally'];
    const enemy = ['Lannister', 'Frey'];
    let sentenceType;

    if (friend.includes(input)) {
        sentenceType = 'friend';
    } else if (enemy.includes(input)) {
        sentenceType = 'enemy';
    } else {
        sentenceType = 'neutral'
    }
    return sentenceType;
}


// Просто сокращалка которая не нравится.
// const whoIsThisHouseToStarks = (input) => {
//     if (['Karstark', 'Tally'].includes(input)) {
//         return 'friend';
//     }
//     if (['Lannister', 'Frey'].includes(input)) {
//         return 'enemy';
//     }
//     return 'neutral';
// }

console.log(whoIsThisHouseToStarks('Karstark'));
console.log(whoIsThisHouseToStarks('Frey'));
console.log(whoIsThisHouseToStarks('Joar'));
console.log(whoIsThisHouseToStarks('Ivanov'));