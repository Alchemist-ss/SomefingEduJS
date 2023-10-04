let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}
let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

// let sum = salaries.John + salaries.Ann + salaries.Pete; 
// sum = (sum > 0) ? console.log(sum) : console.log(0);

console.log(sum)