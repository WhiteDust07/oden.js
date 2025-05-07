/*          Arrays
The length property of an array returns the length of an array (the number of array elements).
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length)

Accessing the First Array Element

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
console.log(fruit)
*/
//Accessing the Last Array Element

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console.log(fruit);
// You can also use the Array.forEach() function:

fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

//  Adding Array Elements
//  The easiest way to add a new element to an array is using the push() method:

fruits.push("Lemon"); // Adds a new element (Lemon) to fruits

console.log(fruits);

// also can add new element
fruits[fruits.length] = "Lemon"; // Adds "Lemon" to fruits

//WARNING !

//Adding elements with high indexes can create undefined "holes" in an array:

// Example
// const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon"; // Creates undefined "holes" in fruits

// In JavaScript, arrays always use numbered indexes.

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length; // Will return 3
person[0]; // Will return "John"

// When to Use Arrays. When to use Objects.

//       JavaScript does not support associative arrays.
//       You should use objects when you want the element names to be strings (text).
//       You should use arrays when you want the element names to be numbers.

//              How to Recognize an Array
// A common question is: How do I know if a variable is an array?

//   The problem is that the JavaScript operator typeof returns "object":

// Solution 1 :
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor:

// To access arrays inside arrays, use a for-in loop for each array:
x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}

// Build in Array methods

// 1
// JavaScript Array join()
// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:

//2

// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.

// This is what popping and pushing is:

// Popping items out of an array, or pushing items into an array.

// The pop() method removes the last element from an array:

// Example;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); // removes the last element
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

// The shift() method removes the first array element and "shifts" all other elements to a lower index.

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

// Warning !
// Using delete() leaves undefined holes in the array.

// Use pop() or shift() instead.

//              Merging Arrays (Concatenating)
//          In programming languages, concatenation means joining strings end-to-end.

//       Concatenation "snow" and "ball" gives "snowball".

//          Concatenating arrays means joining arrays end-to-end.

// The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

// Note
// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments.

// The copyWithin() method copies array elements to another position in an array
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);

// Copy to index 2, the elements from index 0 to 2:

fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);

console.log(fruits);

//      Flattening an array is the process of reducing the dimensionality of an array.

//      Flattening is Useful when you want to convert a multi-dimensional array into a one-dimensional array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();

// Splicing and Slicing Arrays

// The splice() method adds new items to an array.

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:

//                          IMPORTENT  THING
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);

// The slice() method slices out a piece of an array.
// The slice() method slices out a piece of an array into a new array:

// Slice out a part of an array starting from array element 1 ("Orange"):

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1);
console.log(citrus);

// The slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, and up to (but not including) the end argument.

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3);
