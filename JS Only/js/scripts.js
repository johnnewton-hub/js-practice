// Create a reference to the "node" or element that we want to interact with.
const body = document.querySelector("body");

// Create the first element we need, the container div that is in the center of the page.
const containerDiv = document.createElement("div");

// Add the container class to the div. Typically best to do element modifications before pushing into the DOM.
containerDiv.classList.add("container");

// Append the new div to body.
body.appendChild(containerDiv);
/*
<body>
    <div class="container">
    </div>
</body>
*/


// Append a header and a main to the container.
containerDiv.appendChild(document.createElement("header"));
/*
<body>
    <div class="container">
        <header>
        </header>
    </div>
</body>
*/
containerDiv.appendChild(document.createElement("main"));
/*
<body>
    <div class="container">
        <header>
        </header>
        <main>
        </main>
    </div>
</body>
*/

// Examples of using the children property.
//containerDiv.children[1].classList.add("added-with-children");
//containerDiv.querySelector("main").classList.add("added-with-queryselector");

// Example of parent node.
//containerDiv.parentNode.classList.add("added-with-parentnode");

// parentElement of the <html> tag is null, because there is no element / tags around it (it references the html code only, not the DOM).
// parentNode of the <html> tag is the document object because that is the root of the DOM, and parentNode references the DOM.
