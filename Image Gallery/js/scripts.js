// <main> (the parent container of the images)
const imageGallery = document.querySelector("main");
// List of all images in main
const images = imageGallery.querySelectorAll("img");
// Search bar in the header
const searchBar = document.querySelector("#search");
// Clear button for the search bar
const clearButton = document.querySelector("#clear");

for (image of images)
{
    // Create a new element;
    let newDiv = document.createElement("div");

    // 1. Find the image's parent
    // 2. Replace the image as a child of the parent with the div
    // 3. Add the image as a child to the div

    // Main > Img 
    // Becomes
    // Main > Div > Img

    // 1.
    let parentOfTestImage = image.parentNode;
    // Nothing changes yet.

    // 2.
    parentOfTestImage.replaceChild(newDiv, image);
    // Main > Div (no Img, got replaced with Div)

    // 3.
    newDiv.appendChild(image);
    // Main > Div > Img

    // Generate a paragraph to store the caption.
    let caption = document.createElement("p");
    
    // Set the caption to the alt text of the image.
    caption.innerHTML = image.getAttribute("alt");

    newDiv.appendChild(caption);
}

// First image on the page.
let testImage = images[0];





