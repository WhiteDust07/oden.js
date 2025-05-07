const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

let page = document.createElement("p");
page.style.color = "red";
page.textContent = "Hey, I am Red";

container.appendChild(page);

let pageBlue = document.createElement("h3");
pageBlue.style.color = "blue";
pageBlue.textContent = "Hey I am blue h3";
container.appendChild(pageBlue);

childContent = document.createElement("div");
childContent.setAttribute("style", "border: black; background-color: pink");
container.appendChild(childContent);

childContent.innerHTML = `
<h1>I'm in a div</h1>
<p>Me TOO !</p>
`;

// Some useful events include:
// click
// dblclick
// keydown
// keyup

// Learn about Capture and Bubblingg
