


function divsors(number) {
  let divisors = []; 
  for (let i = 2; i < number; i++)  {
    if(number % i === 0) {
      divisors.push(i)
    }
  }
  let prine = divisors.length !== 0 ? divisors : `${number} is prime`
  return prine
}

console.log(divsors(10))
console.log(divsors(15))
console.log(divsors(13))
console.log(divsors(2))



function factorialUsingRecursive(num) {
  if(num === 0) {
    return 1; 
  }
  return num * factorialUsingRecursive(num - 1)
}

function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(factorialUsingRecursive(5))
console.log(factorial(5))



function withoutDuplicates(arr) {
   let uniqueArray = arr.filter((item, pos, self) => {
    return self.indexOf(item) === pos; 
   });
   return uniqueArray; 
}

console.log(withoutDuplicates(listB))

function reversedMessage(str) {
  let splitted = str.split(' '); 
  let reversed = []
  for(let i = splitted.length - 1; i >= 0; i--) {
    reversed.push(splitted[i])
  }
  reversed = reversed.toString(); 
  reversed = reversed.replaceAll(',', ' ');
  return reversed
}

console.log(reversedMessage("my name is Gimme"))

function capitalLetters(string) {
  let convertedWord = string; // parameter assigned to variable. 
  let list = []; // empty array declared
  for (let i = 0; i < convertedWord.length; i++) {
    // for loop where number of loops is based on string lenght.  
    if(convertedWord[i].match(/[A-Z]/) !== null) {

      list.push(i); 
    }
  }
  return list; 
}

function palindrome(str) {
  let re = /[\W_]/g; // lowercase the string and use the RegEx to remove unwonted characters
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

console.log(palindrome("A man, a plan, a canal. Panama"));

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

// Alternative verison One 

let arr = [1, 2, 3, 4]
let arr1 = [3, 4, 5, 6]

function flateenBasic(list1, list2) {
  let flattenList = list1.concat(list2);
  return flattenList;
}

console.log(flateenBasic(arr, arr1));

// The main differenc is that concat can merge one or more arrays, but it is
// good when we have two or more arrays declared.
// In case that is array of arrays it is - to my actual knowledge - possible. 

// Alternative version Two 

let arry = [[1, 2, 3, 4,], [4, 5, 9, 8], [7, 10, 6]]

arry = arry.reduce((a,b) => a.concat(b), []);

console.log(arry)

function randomArrayGenerator(lentgthOfArray, numbersRange) {
  let ranArr = Array.from({length: lentgthOfArray}, () => Math.floor(
    Math.random() * numbersRange + 1
  )); 
  return ranArr.sort();


function capitalIndexes(str) {
  let converted = str;
  let indexesOfCapitals = []; 
  for (let i = 0; i < converted.length; i++) {
    if(converted[i].match(/[A-Z]/) !== null) {
      indexesOfCapitals.push(i)
    }
  }
  return indexesOfCapitals;
}

let final = 4e6 ; 

let fist = 0; 
let sec = 1; 
let acc;
let total = 0;

while (sec < final) {
  acc = fist + sec; 
  fist = sec; 
  sec = acc; 

  if(sec % 2 === 0) {
    total += sec; 
  }
}


console.log(total)



function randomArrayGenerator(lengthOfArr, range) {
  let array = Array.from({length: lengthOfArr}, () => {
    return Math.floor(Math.random() * range + 1)
  })
  return array.sort((a,b) => a - b)
}

function concat(array) {
  return array.reduce((a,b) => a.concat(b), []).sort((a,b) => a - b)
}




let o1 = randomArrayGenerator(10, 100)
let o2 = randomArrayGenerator(10, 100)
let o3 = randomArrayGenerator(10, 100)
let o4 = randomArrayGenerator(10, 100)
let o5 = randomArrayGenerator(10, 100)
let o6 = randomArrayGenerator(10, 100)
let o7 = randomArrayGenerator(10, 100)


let a1 = [o1, o2, o3]
let a2 = [o4, o5, o6]
let a3 = [o6, o7, o1]
let a4 = [o1, o4, o2]


let u1 = concat(a1)
let u2 = concat(a2)
let u3 = concat(a3)
let u4 = concat(a4)

function withoutDuplicates(arr) {
  let unique = arr.filter((x, y, z) => {
    return z.indexOf(x) === y
  })
  return unique
}

function commonValues(a, b) {
  let arr1 = withoutDuplicates(a)
  let arr2 = withoutDuplicates(b)
  console.log(arr1)
  console.log(arr2)
  let finalArr = [...arr1].filter(el => arr2.includes(el))
  return finalArr
}

console.log(commonValues(u1, u2))