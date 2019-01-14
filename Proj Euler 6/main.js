let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 6;
const thePrompt = "The sum of the squares of the first ten natural numbers is, <br> \
          1^2 + 22 + ... + 102 = 385 <br> \
          The square of the sum of the first ten natural numbers is, <br> \
          (1 + 2 + ... + 10)^2 = 55^2 = 3025 <br> \
          Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640. <br> \
          Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."


let testCase = 100;


function squareOfSum(x) {
  return ((x*(x+1)/2)**2)
}

function sumOfSquares(x) {
  let counter = 0;
  for (i=1; i<=x; i++) {
    counter += i**2;
  }
  return counter;
}

let theResults = squareOfSum(testCase) - sumOfSquares(testCase);


name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
