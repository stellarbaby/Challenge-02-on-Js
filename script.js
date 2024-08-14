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
 
