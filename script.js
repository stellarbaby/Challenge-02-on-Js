"use strict";

// Challenge 03 in Part2 

// Test Data 
// Question 1
 let dolphinsScore = (96 + 108 + 89) / 3;
 let koalasScore = (88 + 91 + 110) / 3;

 console.log(dolphinsScore);
 console.log(koalasScore);

//  Question 2

if (dolphinsScore > koalasScore) {
    console.log("Dolphin is the winner of the game");
} else if (koalasScore > dolphinsScore) {
    console.log("Koalas is the winner of the game")
} else if (dolphinsScore === koalasScore) {
    console.log("It is a draw game");
}

// Challenge 04 in Part 2

// Tenary operators

let bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, The tip was ${tip} and the total value is ${ bill + tip}`);
