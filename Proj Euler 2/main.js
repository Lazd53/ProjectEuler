let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 2;
const thePrompt = "Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.";

// starter array
let fibArray = [1,2];

// fill out Fibonacci sequence in fibArray. Stops AFTER it gets bigger than 4 million
do {
  fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
} while (fibArray[fibArray.length-1]<4000000);

// remove last of sequence, since it is larger than 4 million
fibArray.pop();

// removes items from array that do not evenly divide by 2 (ie odd numbers)
fibArray = fibArray.filter( x => x%2==0);

// sum up all of the fibArray left
let theResults = fibArray.reduce((sum, num) => sum + num);

name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
