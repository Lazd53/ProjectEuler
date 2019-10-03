// let title = $("title");
// let name = $("#name");
// let prompt = $("#propmt");
// let answer = $("#answer");

const problemNum = 5;
const thePrompt = "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. \
      What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?";

let arrLCMs = [];

//create all numbers from 2-20 (variable to allow for other numbers to be used)
let createNums = function(num){
  let allNums = [];
  for (let i=2; i<num+1; i++ ){
    allNums.push(i);
  }
  return allNums;
}

// find LCM for each number
function createLCM(x){
  let arr = {};
  let target = x;
  for (let i=2; i<x+1;){
    if (target%i == 0){
      if(!arr[i]){
        arr[i] = 1;
      }else{
        arr[i] = arr[i] +1;
      }
      target = target/i;
    }else{
      i++;
    }
  }
  return arr
}

// Consolidate LCMs down to highest value for each number (ie 4 2s, 2 3s, 1 5, etc)
function consolidate(arrObjs){
  let consolidatedObj = {};
  for (obj of arrObjs){
    let objKeys = Object.keys(obj);
    for (key of objKeys){
      if (consolidatedObj[key] ==  undefined){
        consolidatedObj[key] = obj[key];
      }else{
        if(consolidatedObj[key] < obj[key]){
          consolidatedObj[key] = obj[key];
        }
      }
    }
  }
  return consolidatedObj;
}

//multiply it all together
function getResult(obj){
  let keys = Object.keys(obj);
  let arr = [];
  keys.map( x => arr.push(parseInt(x)**obj[x]));
  return arr.reduce((acc, currentValue) => acc*currentValue);
}

let allNums = createNums(20);
allNums.map( x => arrLCMs.push(createLCM(x)));
let greatestLCMs = consolidate(arrLCMs);



let theResults = getResult(consolidate(arrLCMs));




// name.html(`Project Euler Problem ${problemNum}`);
// title.html(`Project Euler Problem ${problemNum}`);
// prompt.html(thePrompt);
// answer.html(theResults);
