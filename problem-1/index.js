//  1. Write a javaScript program that takes 3 integers of a triangle and check whether the triangle is valid or not. using if else.
// Example_
// Input
// Input first side: 7
// Input second side: 10
// Input third side: 5
// Output
// Valid Triangle

//  SOLVE ==========================

var firstside =7;
var secondside =10;
var thirdside =5;

if (firstside + secondside>thirdside || firstside + thirdside > secondside  || secondside + thirdside >firstside )
console.log("valid triangle ");

else{
console.log("not valid");
}


//  difrent way solve  ==================================>


var firstside = parseFloat (prompt("Enter firsr number="));
var secondside = parseFloat (prompt("Enter  secund number ="));
var thirdside = parseFloat (prompt("Enter  third number"));

if (firstside + secondside>thirdside || firstside + thirdside > secondside  || secondside + thirdside >firstside )
console.log("valid triangle ");

else{
console.log("not valid");
}
// =========================================================>


     




