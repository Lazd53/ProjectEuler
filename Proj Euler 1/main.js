let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 1;
const thePrompt = "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.";

let resultsArray = [];

for (i=3; i<1000; i += 3) {
  resultsArray.push(i);
}

for (i=5; i<1000; i += 5) {
  if (resultsArray.includes(i) == false) {resultsArray.push(i)};
}

let theResults = resultsArray.reduce((total, amount) => total + amount);


name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
