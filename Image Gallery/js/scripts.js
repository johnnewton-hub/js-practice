// <main> (the parent container of the images)
const imageGallery = document.querySelector("main");
// List of all images in main
const images = imageGallery.querySelectorAll("img");
// Search bar in the header
const searchBar = document.querySelector("#search");
// Clear button for the search bar
const clearButton = document.querySelector("#clear");

searchBar.addEventListener("input", () => {
    // For every image on the page
    for (image of images)
    {
        // TODO: Split the query to handle multiple tags, etc.
        // Check it's sibling paragraph for a text match with the search bar
        let query = searchBar.value;
        // Split the query on spaces to make sure that every "word" (tags as well) is in the description
        let subQueries = searchBar.value.split(" ");

        // Set match to true, and we'll change it to false if anything disqualifies an image
        let match = true;

        // For each of the "words"
        for (subQuery of subQueries)
        {
            // If the description does not contain the "word", flag the image as not matching
            if (!image.parentNode.querySelector("p").innerText.toLowerCase().includes(subQuery.toLowerCase()))
            {
                match = false;
            }
        }
        // If the image is not matching.
        if (!match)
        {
            // Hide it.
            image.parentNode.classList.add("hidden");
        }
        // If the image is matching.
        else 
        {
            // Unhide it.
            image.parentNode.classList.remove("hidden");
        }
        
    }
});

clearButton.addEventListener("click", () => {
    searchBar.value = "";    
    searchBar.dispatchEvent(new Event("input"));
});


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
    caption.innerHTML = `${image.getAttribute("alt")}<br>`;

    // Get tags attribute (full string).
    let tags = image.getAttribute("tags");
    // Split the tags attribute on the space character, into a list of each tag.
    let tagList = tags.split(" ");
    // For each tag...
    for (tag of tagList)
    {
        // Create a link.
        let tagLink = document.createElement("a");
        // Set the text of the link to our tag.
        tagLink.innerHTML = tag;
        // Set the reference of the link to the current page.
        tagLink.setAttribute("href", "#");
        // We add an event listenter to the click event.
        tagLink.addEventListener("click", function(event) {
            // We prevent the default behaviour from occuring (don't reload the page).
            event.preventDefault();
            // We set the value of the search bar to the tag value.
            searchBar.value = tagLink.innerHTML;
            // Fire the input event.
            searchBar.dispatchEvent(new Event("input"));

        });

        // We add the tag to the paragraph (caption).
        caption.appendChild(tagLink);
    }

    // Add the caption to the div.
    newDiv.appendChild(caption);

}







