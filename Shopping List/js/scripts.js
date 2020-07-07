{
    console.log("Script starting!");
    // querySelector will use CSS selector syntax to select HTML elements.
    
    // <input type="text">
    const input = document.querySelector("input");
    // <a href="#">Add Item</a>
    const addButton = document.querySelector("a");
    // <ul class="empty">
    const list = document.querySelector("ul");

    addButton.addEventListener("click", () =>
        {
            // 1. Create a list item element.
            // 2. Add the text from the text field to the list item.
            // 3. Add the list item to the list.
                // 3a. If it is the first item, remove the empty class from
                // the list.
                // 3b. If it is the first item, remove the "No items yet!" item.
            // 4. Clear the text input. 


        }
    );
    

    console.log("Script ending!");
}