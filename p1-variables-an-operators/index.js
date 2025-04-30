let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

let age = 11;
console.log(age); // outputs 11 to the console

age = 54;

console.log(age); // what will be output now?

// const

// try it

const pi = 3.14;
//pi = 10;

console.log(pi); // What will be output?

/*
An error is thrown. 
It doesn’t even reach the console.log! 
You may wonder why we would want an error in our code.
Truth be told, errors are incredibly helpful 
at telling us what is wrong with our 
code and exactly where the issue is.
*/

//          Numbers

console.log(23 + 97 + 10 - 23 + 30 - 40);

console.log((4 + 6 + 9) / 77);

let a = 10;

console.log(a);
a = a + 23;
console.log(a);

let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;

console.log(percentage);

//There is a list of "reserved words", which cannot be used as
// variable names because they are used by the language itself.

// For example: let, class, return, and function are reserved.
// ex.
// let let = 5  // can't name a variable "let, error!"

//                       Use Strict
/*
Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5
This is a bad practice and would cause an error in strict mode:

"use strict";

num = 5; // error: num is not defined

///        UPPER CASE CONST

There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.

Such constants are named using capital letters and underscores.

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";


COLOR_ORANGE is much easier to remember than "#FF7F00".
It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.

note ...
capital-named constants are only used as aliases for “hard-coded” values.


//                        Name thing right

Variable naming is one of the most important and complex skills in programming.
 A glance at variable names can 
reveal which code was written by a beginner versus an experienced developer.

i should spend time thinking about variables naming . Doing so will repay you handsomely.


Some good-to-follow rules are:

    . Use human-readable names like userName or shoppingCart.
    . Stay away from abbreviations or short names like a, b, and c, unless you know what you’re doing.
    . Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
    . Agree on terms within your team and in your mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.
Sounds simple? Indeed it is, but creating descriptive and concise variable names in practice is not. Go for it.



//            ** =>	Exponentiation ,
//             meaning = 2 ** 3 evaluates to 8,
//  raises the first operand to the power of the second operand
//          x ** y produces the same result as Math.pow(x,y):  <= importent



Note that if any of the operands is a string, then the other one is converted to a string too.

For example:

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"


let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)


let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
Here, the first expression 1 + 2 is evaluated and its result is thrown away.
Then, 3 + 4 is evaluated and returned as the result.
 


let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

 
 
 The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

Here’s the demo for subtraction and division:

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); 
 






 unary plus
 The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. 
But if the operand is not a number, the unary plus converts it into a number.
 
 let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
If we want to treat them as numbers, we need to convert and then sum them:

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// al
 
 
 
 
 
 
 
 
 
 
*/
