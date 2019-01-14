let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 7;
const thePrompt = "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. <br> \
      What is the 10,001st prime number?";

primesArray = [2,3,5,7,11,13];
targetIndex = 10001;


for (j=15; primesArray.length+1<= targetIndex; j+=2){
  testPrime(j);
}

console.log(primesArray);

function testPrime (x) {
  for (i=2; i<x; i++) {
    if (x%i ==0) {
      return;
    }
  }
  primesArray.push(x);
}


let theResults = primesArray.pop();




name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
