//

// You can use map() to do something to each item in a collection and create a new collection containing the changed items:

function toUpper(string) {
  return string.toUpperCase();
}

let cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// You can use filter() to test each item in a collection,
//  and create a new collection containing only items that match:

function lCat(cat) {
  return cat.startsWith("L");
}

cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]

for (initializer; condition; final - expression) {
  // code to run
}

//   The continue statement works similarly to break,
// but instead of breaking out of the loop entirely,
// it skips to the next iteration of the loop.

// initializer
while (condition) {
  // code to run

  final - expression;
}

// This works in a very similar way to the for loop,
// except that the initializer variable is set before the loop,
//  and the final-expression is included inside the loop after the code
// to run,
// rather than these two items being included inside the parentheses.

// The do...while loop is very similar, but provides a variation on the while structure:

initializer;
do {
  // code to run

  final - expression;
} while (condition);

// inside a do...while loop is always executed at least once.
