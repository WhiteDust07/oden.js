//          Understanding Errors
/*
For all examples in this lesson,
you should run the code in the browser’s console.


const a = "Hello";
const b = "World";

console.log(c);

^
This code will run, but it will generate an error. 
In technical terms, this is called “throwing” an error

1  . In this example, we have a ReferenceError.

A ReferenceError is thrown when one refers to a variable 
that is not declared and/or initialized within the current scope. 
In our case, the error message explains that the error has occurred 
because c is not defined.


THere might be diffrent reson of causing the error to occure

2  . 
The next part of an error gives us the name of the file in which
you can find the error (in this case, our script.js), 
and also the line number.


Sometimes your browser’s console will also display the column (or character) in the line at which the error is occurring. 
In our example, this would be at script.js:4:13.

3...
Another important part of an error is the stack trace. 
This helps you understand when the error was thrown in your application, and what functions were called that led up to the error.
 So, for example, if we have the following code:




 Syntax error
A syntax error occurs when the code you are trying to run is not written correctly, 
i.e., in accordance with the grammatical rules of JavaScript. 
For example this:

function helloWorld() {
  console.log "Hello World!"
}
will throw the following error,
 because we forgot the parentheses for console.log()!

----                -Type error
These errors are thrown for a few different reasons:

Per MDN, a TypeError may be thrown when:

..an operand or argument passed to a function is incompatible with the type expected by that operator or function;
..or when attempting to modify a value that cannot be changed;
..or when attempting to use a value in an inappropriate way.

*/

const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);

// Here, we get a TypeError with a message stating that str1.push is not
// a function. This is a common error message that confuses learners
// because you might know that .push() is certainly a function
// (for example, if you have used it to add items to arrays before).
// If we change .push() to .concat(), a proper String method, our code runs as intended!
