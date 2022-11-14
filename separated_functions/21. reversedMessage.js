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


// Examples

console.log(orginalMessage);

/* Output: Gimmie string */

console.log(reverseMessage);

/* Output: string Gimmie */