let title = $("title");
let name = $("#name");
let prompt = $("#propmt");
let answer = $("#answer");

const problemNum = 4;
const thePrompt = "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. \
  Find the largest palindrome made from the product of two 3-digit numbers.";

theResults = 0;
//sets first 3 digit number - can be no lower than 100
for (i=999; i>100; i--) {
  //sets second 3 digit number - can be no higher than first number because would have already be iterated (ie 999*888 == 888*999) and no lower than 100
  for (j=i; j>100; j--) {
    if (isPalindrome(i*j)){
      if (i*j > theResults){
        theResults = i*j;
      }
    }
  }
}

function isPalindrome(x) {
  let theString = x.toString(); //turns sum into a string
  //checks if the string is equivalent to the reverse of the string - making a palindrome
  if (theString == theString.split("").reverse().join("")) {
    return true;
  }
  return false;
}



// theResults = "temp";
name.html(`Project Euler Problem ${problemNum}`);
title.html(`Project Euler Problem ${problemNum}`);
prompt.html(thePrompt);
answer.html(theResults);
