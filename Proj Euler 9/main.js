let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 9;
const thePrompt = "A Pythagorean triplet is a set of three natural numbers, a < b < c, for which a^2 + b^2 = c^2. For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2. <br> \
  There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.";

let theResults = "Here's the answer";

let allSquares = [];
let pythagTrips = [];

// (function findAllSquares() {
//   for (i = 1; i < 1000; i++){
//     allSquares.unshift(i**2);
//   }
// })();
//
// (function pythogoreanTriplets(){
//   for (a = 1; a < allSquares.length; a++) {
//     for (b=allSquares.indexOf(a); b<allSquares.length; b++){
//       if (allSquares.includes(a + b){
//         pythagTrips.push([a,b,a**2 + b**2]);
//       }
//     }
//   }
// })()

(function run(){
  for (a = 1; a < 1000; a++) {
    for (b = a; b < 1000; b++) {
      let c = (a**2 + b**2)**0.5;
      if (c>=1000) {
        break;
      }
      if (Number.isInteger(c)) {
        pythagTrips.push([a,b,c]);
      }

    }
  })();


console.log(pythagTrips);

name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
