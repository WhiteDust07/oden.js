let i = 10;

const output = document.querySelector(".output");

for (i = 0; i <= 10; i++) {
  const para = document.createElement("p");
  if (i == 10) {
    para.textContent = "CountDown " + i;
  } else if (i == 0) {
    para.textContent = "Blast Off";
  } else {
    para.textContent = i;
  }
  output.append(para);
}

people = ["nad", "jonh", "phil", "lola", "katrin"];
const refused = createElement("p");
const admitted = createElement("p")
refused.textContent;
output.append(refused);
output.append(admitted);

//   const admitted = createElement("p");
// for (i = 0; i <= people.length; i++) {
//   
//   if (people.filter("phil" && "lola") == "phil" || "lola") {
//     refused.textContent == "phil";
//   } else {
//     admitted.textContent == people;
//   }
//   output.append(refused);
//   output.append(admitted);
// }

for (const person of people) {
  if (person === "phil" || person === "lola") {
    refused.textContent += `${person}, `;
  }else {
    admitted.textContent += `${person, }`
  }
}
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';




// let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
// The loop do..while repeats while both checks are truthy:

// The check for num <= 100 – that is, the entered value is still not greater than 100.
// The check && num is false when num is null or an empty string. Then the while loop stops too.
// P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.