// Basic iterators

// .forEach() - does not change the orginal array, returns undefined

let num = [1, 2, 3]

num.forEach(el => {
  console.log( el ** 2)
})

/* It will log to console result of raising every element to the power of 2.
in short words: Exponentiation or squares of the numbers. 

Output: 

1
4
27

*/

// .map() the same as above but it do changes orginal array and returns new array

let mappedNumbers = x.map(el => {
  return el ** el
})

console.log(mappedNumbers)

/* It will execute code for all elements and returns new array where there will
be elements - changed by provided code.

Above - it will returns a array of squares.

Output: 

[1, 4, 27]

*/

// .filter() checks every element for matching certain criteria 

let lessThan3 = num.filter(el => el < 3)

console.log(lessThan3)

/* It will check every element and then returns a new array but with elements 
that are truthy for critera

e.g when there is "el < 3" criterium it will return array of elements that are 
smaller than 3 

Output: 

[1, 2]

*/

// .findIndex() - returns the index of the first element that satisfies conditon

let find2 = num.findIndex(el => el === 2)

console.log(find2)

/* it will look for the first element that fulfills condition: el === 2. 

in that case is on the 1 place in the array since indexes od array starts from 0.

Output: 

1 

*/

// .reduce() - reduce is my favourite 

let sum = num.reduce((a,b) => a + b)

console.log(sum)

/* it will sum all numbers in array

Output: 

6

*/