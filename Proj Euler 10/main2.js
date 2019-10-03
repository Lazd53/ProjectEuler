let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 10;
const thePrompt = "The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. <br> Find the sum of all primes below 2 million.";
const stayBelow = 2000000;

let fullArray = [];
let primeSum = 0;

console.time("original");
// console.time("fill in array");
for (i=2; i<stayBelow; i++) {
  if (testPrime(i)) {
    primeSum += i;
    fullArray.push(i);
  }
}

console.timeEnd("original");

function testPrime (x) {
  for (j=2; j<x**.5; j++) {
    if (x%j ==0) {
      return false;
    }
  }
  return true;
}


let theResults = `Prime Sum: ${primeSum}` ;



name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
