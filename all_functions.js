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


// Sorted Array 

function sortArr(arr) {
  return arr.sort((a,b) => a - b); 
} 


// Converting Sorting Stringing 

function sortedConverted(arrayOfNumbers) {
  let sorted = arrayOfNumbers.sort((a,b) => a - b); 
  // Sorted array assigned to variable sorted
  let arrayOfStrings = [];
  // Empty array declaration 
  sorted.forEach(el => {
    arrayOfStrings.push(String(el))
    /* Here converts it to strings and pushes numbers as strings to variable 
    array Of String */
  })
  return arrayOfStrings
}


// FizzBuzz

for (let i = 1; i <= 100; i++) { 
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// Chessboard 

/* Program that uses console.log to print chess board made from "#"*/

let size = 8; 
let board = ''; 

for (let y = 0; y <= size; y++) { // y axis
  for (let x = 0; x <= size; x++) { // x axis
    if ((x+y) % 2 === 0) { // modulo operator 
      board += '#';
    } else {
      board += ' ';
    }
  }
  board += '\n'
}

console.log(board)


// Flatten Array 

/* This verion is with reduce, and concat methods */

function flaten(someArrayOfArrays) {
  let arry = someArrayOfArrays;
  let flatten = arry.reduce((a,b) => a.concat(b), []);
  return flatten; 
}

// or with flat method 

function flatten1(someArrofArrys) {
  return someArrofArrys.flat(1)// where number spefiied depth of flattening

}


// Thousand Separator 

function format_number(someNumber) {
  return someNumber.toLocaleString(); 
}


// Counting Arguments 

function countArguemnts() {
  return arguments.length;
}


// Fibonacci Generator 

function fibonacciGenerator(lenghtOfList) {
  let fibonacciList = []; 
  let x1 = 0; 
  let x2 = 1; 
  for(let i = 0; i < lenghtOfList; i++) {
    fibonacciList.push(x1) 
    let acc = x1 + x2; 
    x1 = x2; 
    x2 = acc; 
  }
  return fibonacciList
}

// Even Numbers 

const evenNum = (arr) => {
  let even = y.filter(el => {
    return el % 2 === 0;
  })
  return even;
};


// Array of squares 

const makeArrayOfSquares = (startNum, endNum) => {
  let array = []; 
  for(let i = startNum; i <= endNum; i++) {
    let squared = i ** 2;
    array.push(squared);
  };
  return array; 
}


// Array Summing 

const sum = (arr) => {
  return arr.reduce((a,b) => a + b);
}


// Adding 

const addNumbers = (startNum, endNum) => {
  let sum = 0; 
  for(let i = startNum; i <= endNum; i++) {
    sum = sum + i; 
  }
  return sum; 
}


// Factorial 

function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

// Reversed Message 


// ------------ TO Make It More Cleare -------------------------
// function that make reversed messages 

let orginalMessage = userString();
let reverseMessage = reverse(orginalMessage);
// functions assigned to variables

function userString() {
  let message = prompt("Gimme some long string: ") 
  return message
}
// this function takes user message 

function reverse(orginalMessage) {
  let splited = orginalMessage.split(' ')
  // here it splits message to array
  let reveresed = [] // new variable declared
  for (let i = splited.length - 1; i >= 0; i--) {
    reveresed.push(splited[i]);
  }
  // here is for loop to make reverse order 
  reveresed = reveresed.toString();
  // coverted to string 
  return reveresed; 
}

// function that make user message reversed

reverseMessage = reverseMessage.replaceAll(',', ' ')
// replace all commas with space


