/*
To gain clarity and understanding of the problem, write it down on paper, reword it in plain English until it makes sense to you,
 and draw diagrams if that helps.
When you can explain the problem to someone else in plain English, you understand it.

plan


.. Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
.. What inputs will your program have? Will the user enter data or will you get input from somewhere else?
.. What’s the desired output?
.. Given your inputs, what are the steps necessary to return the desired output?

Pseudocode  == this is writing your logic for your program in natural language 
instead of a code . that helps you slow down and think through the steps 

    Example:
. When the user inputs a number
. Initialize a counter variable and set its value to zero
. While counter is smaller than user inputted number increment the counter by one
. Print the value of the counter variable

- Getting started with and solving one of the subproblems you have identified in the planning stage often reveals the next subproblem you can work on


            importent :::
-- Many beginners try to solve the big problem in one go. Don’t do this

*/

let array = ["3409", "09483", "3984"];

console.log(array.length);

//   I also can use parseInt() function, instead of Number to conver string to a Number
function fizzBuzz() {
  const userInput = Number(prompt("pick any number : "));

  for (i = 1; i <= userInput; ++i) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

/*              ^^^^^^ For My code >< Planing
    When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number


 */

let listOfNumber = [3, 6, 12];
function list() {
  for (i = 0; i < listOfNumber.length; ++i) {
    if (listOfNumber[i.] > 0) {
      console.log(listOfNumber[i] + " is the biggest");
    }
  }
}
list();
