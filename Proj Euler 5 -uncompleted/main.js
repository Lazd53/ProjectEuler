let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 5;
const thePrompt = "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. \
      What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?";

let primesArray = [2];

// function testPrime (x) {
//   for (j=2; j<x; j++) {
//     if (x%j == 0) {
//       return false;
//     }
//   }
//   return true;
// }

function allPrimes(endNum) {
  for (j=2; j<endNum+1; j++) {
    console.log(j);
    if(primesArray.every(prime => endNum%prime != 0)) {
      primesArray.push(j);
    }
  }
}

allPrimes(20);

// for (i=0; i<20; i++) {
//   if (testPrime(i) == true) {
//     console.log(`${i} ${testPrime(i)}`);
//     primesArray.push(i);
//   }
// };

// console.log(primesArray);
// console.log(testPrime(6));
let theResults = "Here's the answer";



name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
