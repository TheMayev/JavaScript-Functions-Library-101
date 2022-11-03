// Basic iterators - are ommited here look for them in separated_functions folder


// Common Values

function commonValues(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);
  let setC= new Set([...setA].filter(el => setB.has(el)));
  return Array.from(setC);
}


// Without Duplicates

function withoutDuplicates(somArr) { 
  let mySet = new Set(somArr);
  return Array.from(mySet);
}


// Capital Letters Indexes

function capitalLetters(string) {
  let convertedWord = string;  
  let list = []; 
  for (let i = 0; i < convertedWord.length; i++) {  
    if(convertedWord[i].match(/[A-Z]/) !== null) {
      list.push(i); 
    }
  }
  return list; 
}


// First and Last 

function firstLast(list) {
  let newList = []; 
  newList.push(list[0]); 
  newList.push(list[list.length -1 ]);
  return newList;
}


// Reverse Array 

function reverseArray(arr) { 
  let reversed = []; 
  for (let i = arr.length - 1; i >= 0; i--) { 
      reversed.push(arr[i]);
  } 
  return reversed 
}


// Random Array Generator 

function randomArrayGenerator(lentgthOfArray, numbersRange) {
  let ranArr = Array.from({length: lentgthOfArray}, () => Math.floor(
    /*1 - comment about this is under the function*/
    Math.random() * numbersRange + 1
  )); 
  return ranArr.sort((a,b) => a - b);
} 

