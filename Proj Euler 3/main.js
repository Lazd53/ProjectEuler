let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 3;
const thePrompt = "The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143";

let targetNum = 600851475143;
let halfSum  = targetNum**.5;
let smallArray = [];
let bigArray = [];

for (i=1; i<halfSum; i++) {
  if (targetNum%i == 0) {
    smallArray.push(i);
    bigArray.unshift(targetNum/i);
  }
}

let allArrayPrimes = smallArray.concat(bigArray).filter(testPrime);
console.log("small array" + smallArray);
console.log("big array" + bigArray);
console.log("all array primes" + allArrayPrimes);


function testPrime (x) {
  for (i=2; i<x; i++) {
    if (x%i ==0) {
      return false;
    }
  }
  return true;
}


let theResults = allArrayPrimes.pop();




name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
