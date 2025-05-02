function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let x = average(10, 20);

console.log(x);

function add7(num7 = 7) {
  console.log(num7);
  return num7;
}
add7();

function multiply(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
}
multiply(2, 4);

function capitalize(stringCap) {
  string = stringCap.at(0).toUpperCase() + stringCap.slice(1, stringCap.length);
  console.log(string);
  return string;
}
capitalize("dust");

function lastLetter(lastpart) {
  let last = lastpart.charAt(lastpart.length - 1);
  last = lastpart.slice(-1);
  console.log(last);
  return last;
}

lastLetter("abcd");
