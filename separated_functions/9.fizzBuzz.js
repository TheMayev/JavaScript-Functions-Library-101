// FizzBuzz

/* Program that uses console.log to print all the numbers from 1 to 100, with
two expections. For numbers divisble by 3, print "Fizz" instead of number, 
and for numbers divisible by 5 (and not 3) print "Buzz". For number that are 
divisible by 3 and 5 print "FizzBuzz". */

for (let i = 1; i <= 100; i++) { // for loop declaration for numbers form 1 - 100
  // incremented by 1. '

  //conditional statements
  if (i % 3 === 0 && i % 5 === 0) {
    // firstly and statement with && operator
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}