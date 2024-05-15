///////////////////////////////////////TASK-1


// Imagine you have a variable age representing a person's age.
// Write a conditional statement that checks if the person is eligible to vote.
// If the person's age is 18 or older, print 'You are eligible to vote.
// ' If the person's age is less than 18, print 'You are not eligible to vote yet.' 
// Write this in the programming language of your choice.

//////////////////////////////SOLVE

// var age = prompt("Enter your age")

// if (age > 18) {
// console.log("you are Eligible for vote");
// }
// else {
//     console.log("You Are not Eligible For voting")
// }

//////////////////////TASK-2

// Consider a variable temperature representing the temperature in Celsius.
// Write a conditional statement that checks if the temperature is greater than 25 degrees.
// If it is, print 'It's a hot day!' If it's not greater than 25 degrees,
//  print 'It's a normal day.' Write this in the programming language of your choice.


//////////////////////////////SOLVE

// var temperature = prompt("enter the temprature"); 

// if (temperature > 25) {
//     console.log("It's a hot day!");
// } else {
//     console.log("It's a normal day.");
// }

///////////////////////////////TASK-3


// Imagine you have a variable grade representing a student's score on a test.
// Write a conditional statement that checks if the grade is greater than or equal to 60.
// If it is, print 'You passed the test!' If it's less than 60, print 'You failed the test.
// ' Write this in the programming language of your choice

/////////////////SOLVE

var student_grade = +prompt("Enter Your Grade")
if (student_grade >= 60) {
    console.log("You passed the test!");
    
} else {
    console.log("You failed the test.");
}

/////////////////////////////////TASK-4

// Write a conditional statement that checks if a variable is_raining is true.
// If it is, print 'Remember to bring an umbrella.' 
// If it's false, print 'enjoy the sunny weather!'.

var raining = false;

if (raining == true) {
    console.log("Remember to bring an umbrella.");
    
} else {
    console.log("enjoy the sunny weather!");
}

///////////////////TASK-5

// Create a program that asks the user to enter their age.
// If the age is greater than or equal to 18,
// print 'You are an adult.' Otherwise, print 'You are a minor.


var age =prompt("Enter Your Age");
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor.");
}


///////////////////////TASK-6

// Write a program that asks the user to input a number.
// If the number is positive, print 'The number is positive.' 
// If it's negative, print 'The number is negative.' If it's zero,
// print 'The number is zero.' 
 
let number = +prompt("Enter a Number")

if (number > 0) {
    console.log("The Number is Positive");
}
else if (number < 0){
    console.log("The Number is Negative");
}
else if (number == 0) {
    console.log("The Number is Zero");
}
else {
    console.log("all number are integer");
}
