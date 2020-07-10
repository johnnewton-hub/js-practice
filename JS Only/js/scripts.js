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


// Create the Div and Nav in the header.
containerDiv.querySelector("header").appendChild(document.createElement("div"));
containerDiv.querySelector("header").appendChild(document.createElement("nav"));

/*
<body>
    <div class="container">
        <header>
            <div>
            </div>
            <nav>
            </nav>
        </header>
        <main>
        </main>
    </div>
</body>
*/


// Create our logo image.
let pageLogo = document.createElement("img");
// Set image attributes.
pageLogo.src = "img/logo.png";
pageLogo.alt = "The logo for the page.";
// pageLogo.setAttribute("src", "img/logo.png")

// Create our page heading.
let pageHeading = document.createElement("h1");
// Set heading text.
pageHeading.innerText = "Page Heading";

// Add the image and heading to the DOM.
containerDiv.querySelector("header>div").appendChild(pageLogo);
containerDiv.querySelector("header>div").appendChild(pageHeading);
/*
<body>
    <div class="container">
        <header>
            <div>
                <img src="img/logo.png" alt="The logo for the page." />
                <h1>Page Heading</h1>
            </div>
            <nav>
            </nav>
        </header>
        <main>
        </main>
    </div>
</body>
*/


// Declare the link names.
let navLinkTexts = ["Home", "About", "Blog's Main Topic 1", "Blog's Main Topic 2", "Blog's Main Topic 3", "Associated Blogs"];
let navLinkList = document.createElement("ul");
containerDiv.querySelector("header>nav").appendChild(navLinkList);
/*
<body>
    <div class="container">
        <header>
            <div>
                <img src="img/logo.png" alt="The logo for the page." />
                <h1>Page Heading</h1>
            </div>
            <nav>
                <ul>
                </ul>
            </nav>
        </header>
        <main>
        </main>
    </div>
</body>
*/

for (linkText of navLinkTexts)
{
    let newListItem = document.createElement("li");
    let newLink = document.createElement("a");
    newLink.href = "#";
    newLink.innerText = linkText;

    newListItem.appendChild(newLink)
    navLinkList.appendChild(newListItem);
}
/*
<body>
    <div class="container">
        <header>
            <div>
                <img src="img/logo.png" alt="The logo for the page." />
                <h1>Page Heading</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Blog's Main Topic 1</a>
                    </li>
                    <li>
                        <a href="#">Blog's Main Topic 2</a>
                    </li>
                    <li>
                        <a href="#">Blog's Main Topic 3</a>
                    </li>
                    <li>
                        <a href="#">Associated Blogs</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
        </main>
    </div>
</body>
*/