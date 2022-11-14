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


/* Output: 

# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #

*/

