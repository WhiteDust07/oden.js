//To have the equivalent output using a normal string you'd
// have to include line break characters (\n) in the string:

//js;
// Copy to Clipboard
const newline = "One day you finally knew\nwhat you had to do, and began,"; // separates the line

console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

let text1 = "HELLO WORLD";
//document.getElementById("demo").innerHTML = text1.charAt(0);

console.log(text1.charAt(0));

//ES2022 introduced the string method at():
const name = "W3Schools";
let letter = name.at(2);
console.log(letter);

let letter2 = name[2];
console.log(name[2]);

let text2 = "HELLO WORLD";
let char = text2[0];
console.log(char);

//      slice(start, end)
//      substring(start, end)
//      substr(start, length)

//   slice()
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

//If you omit the second parameter, the method will slice out the rest of the string:
let part2 = text.slice(7);
console.log(part2);

// substring() is similar to slice().

//The difference is that start and end values less than 0 are treated as 0 in substring()
let str = "Apple, Banana, Kiwi";
let partsub = str.substring(7, 13);
console.log(partsub);

//substr() is similar to slice().

//The difference is that the second parameter specifies the length of the extracted part.

let str1 = "Apple, Banana, Kiwi";
let partSubstr = str1.substr(7, 6);
console.log(partSubstr);

//Converting to Upper and Lower Case
let up = "hello";
let upper = up.toUpperCase();

let low = "HELlo";
let lower = up.toLowerCase();

// concat() joins two or more strings:
let textcon = "Hello";
let textcat = "World";
let text3 = textcon.concat(" ", textcat);
console.log(text3);

//          trim()

let trim = "      Hello World!trim() it      ";
let trim2 = trim.trim();
console.log(trim2);

//The padStart() method pads a string from the start.

//It pads a string with another string (multiple times)
// until it reaches a given length.

//    note

// The padStart() method is a string method.

// To pad a number, convert the number to a string first.

let pad = "5";
let padded = pad.padStart(4, "0");
console.log(padded);
padded = pad.padStart(4, 0);
console.log(padded);
console.log(typeof padded);
//   STring repeat()
// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.

let repeat = "Hello world! ";
let result = repeat.repeat(4);

console.log(result);
//                  REplace() method
// By default, the replace() method replaces only the first match:

let replace = "Please visit Microsoft and Microsoft!";
let newText = replace.replace("Microsoft", "W3Schools");
console.log(newText);
// it is case sensative
newText = replace.replace("MICROSOFT", "W3Schools");
console.log(newText);

// To replace case insensitive, use a regular expression with an
// /i flag (insensitive):       use this FU88ER

newText = text.replace(/MICROSOFT/i, "W3Schools");

// In 2021, JavaScript introduced the string method replaceAll():
let cats = "I love cats. Cats are very easy to love. Cats are very popular.";
cats = cats.replaceAll("Cats", "Dogs");
cats = cats.replaceAll("cats", "dogs");

console.log(cats);

//                  Split(((())))
// converts to an Array YOO
let list = "a,b,c,d,e,f";
const myArray = list.split(",");
console.log(myArray);

alert("Z" > "A"); // true
