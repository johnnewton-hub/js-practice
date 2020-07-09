// Create a reference to the "node" or element that we want to interact with.
const body = document.querySelector("body");

// Create the first element we need, the container div that is in the center of the page.
let containerDiv = document.createElement("div");

// Add the container class to the div. Typically best to do element modifications before pushing into the DOM.
containerDiv.classList.add("container");

// Append the new div to body.
body.appendChild(containerDiv);