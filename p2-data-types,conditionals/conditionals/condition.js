// /*      Comparison

// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true
// */

// console.log("A" > "B"); //false

// console.log(null > 0); //f
// console.log(null == 0); //f
// console.log(null >= 0); // true

// The reason is that an equality
// check == and comparisons > < >= <= work differently.
//  Comparisons convert null to a number,
//  treating it as 0. That’s why (3) null >= 0
// is true and (1) null > 0 is false.

//      CONverstion conver null to a NUMBER

// alert( undefined > 0 ); // false (1)
// alert( undefined < 0 ); // false (2)
// alert( undefined == 0 ); // false (3)
/*
Comparisons (1) and (2) return false because 
undefined gets converted to NaN and NaN is a special
numeric value which returns false for all comparisons.


The equality check (3) returns false because 
undefined only equals null, undefined, and no other value.


//                              IMPortent . Note

Treat any comparison with undefined/null except the strict equality === with exceptional care.


Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.
5 > 4 t
"apple" > "pineapple" f
"2" > "12" t
undefined == null t
undefined === nullf
null == "\n0\n" t > f
null === +"\n0\n"f

*/

//
//          Conditions
//

//
/*

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

        logical Operator
        OR => ||
true || alert("not printed");
false || alert("printed");

In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.


            AND => &&

The AND && operator does the following:

Evaluates operands from left to right.

For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.


// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


let age = 15;
if (14 < age < 90) {
} else if (!(age > 14 && age < 90)) {
}

function input() {
  let who = prompt("Who is there:");
  if (who === "Admin") {
    let password = prompt("Password? : ");
    console.log(who);
    if (password === "TheMaster") {
      console.log("Welcom bud");
    } else if (password === "" || null) {
      alert("Canceled");
    } else {
      alert("Wrong password");
    }
  } else if (who === "" || null) {
    console.log("Canceled");
  } else {
    alert("I don't know You ");
  }
}

input();
*/
/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not,
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
  const a = 1;
  const b = 1;

  let result;

  // Edit between these lines
  // =================================
  result = a + b;

  console.log(result);
  // =================================

  return result;
}

troubleshooting();

// Do not change this
// module.exports = troubleshooting;

/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 *
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

//number = Number(prompt("enter a number"));

function numberChecker() {
  if (number >= 10) {
    return true;
    // alert("true");
    // console.log("true");
  } else {
    // console.log("false");
    return false;
  }
}
//numberChecker();

/**
 * Lets do some math!
 * Some rules first:
 *   Enter the operations, replacing the `"?"`, make the computer do the work for you.
 *   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
 *
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */
function math() {
  const a = 1 + 8;
  const b = 22 * 3;
  const c = 5 % 4;
  const d = a - 17;
  const e = a + b + c + d;
  console.log(e);
}
math();
//module.exports = { a, b, c, d, e };

//          last step

function follow() {
  let firstName = prompt("first name");
  const lastName = prompt("last name");
  const currentYear = Number(prompt("current year"));
  const birthDay = prompt("birth day");
  kj;
  const fullName = `${firstName} ${lastName}`;
  const age = currentYear - birthDay;
  let greeting = `${fullName} age is ${age}  year:${currentYear} birthday:${birthDay}`;

  console.log(greeting);
}
function jsOfficial() {
  name = prompt('what is the "official" name of Javascript');
  name === "ECMAScript"
    ? console.log("that is right")
    : alert("it is ECMAScript");
}
function rewrite() {
  let result;
  let a = 2;
  let b = 1;
  a + b < 4 ? (result = "below") : (result = "over");
  console.log(result);
}
rewrite();

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

// A number 0, an empty string "", null, undefined, and NaN all become false.
//  Because of that they are called “falsy” values.
