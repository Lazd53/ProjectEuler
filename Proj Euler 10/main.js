let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 10;
const thePrompt = "The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. <br> Find the sum of all primes below 2 million.";
const stayBelow = 1000000;

let fullArray = [];
let primeSum = 0;

// console.time("fill in array");
for (i=2; i<stayBelow; i++) {
  fullArray.push(i);
}


console.time("original");
while (fullArray.length > 0) {
  let currentVal = fullArray.shift();
  primeSum += currentVal;
  fullArray = fullArray.filter( x => x%currentVal != 0);
}
console.timeEnd("original");



let theResults = `Prime Sum: ${primeSum}` ;



name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
