// Capital Letters Indexes

/* Function that takes random string as parameter and returns array of indexes, 
where index number is number of capital letters in this string */


function capitalLetters(string) {
  let convertedWord = string; // parameter assigned to variable. 
  let list = []; // empty array declared
  for (let i = 0; i < convertedWord.length; i++) {
    // for loop where number of loops is based on string lenght.  
    if(convertedWord[i].match(/[A-Z]/) !== null) {
      /* RegEx declared, function looks for capital letters, and when capital
      letter is found it pushes its index to the array "List" */ 
      list.push(i); 
    }
  }
  return list; 
}

// spaces are icluded as idexes

// Example 

let str = 'Im Best ProgrameR in The WoRlD'

console.log(capitalLetters(str))

/* Output: [0, 3, 8, 16, 21, 25, 27, 29] */

