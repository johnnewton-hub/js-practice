{
    console.log("Script starting!");
    // querySelector will use CSS selector syntax to select HTML elements.
    
    // <input type="text">
    const input = document.querySelector("input");
    // <a href="#">Add Item</a>
    const addButton = document.querySelector("a");
    // <ul class="empty">
    const list = document.querySelector("ul");
    // Running list of all our items.
    let itemArray = [];

    addButton.addEventListener("click", () =>
        {
            // TODO: Add Error Output to User

            // Prevent Empty List Items (Including Whitespace) and Prevent Duplicate List Items (Case Insensitive)
            if (input.value.trim() !== "" && !itemArray.includes(input.value.trim().toLowerCase()))
            {
                // 1. Create a list item element.
                let newListItem = document.createElement("li");

                // 2. Add the text from the text field to the list item.
                // P.S. Also removing trailing and leading whitespace.
                newListItem.innerText = input.value.trim();

                // Convert to Lowercase for Case Insensitivity
                itemArray.push(input.value.trim().toLowerCase());

                if (list.className === "empty")
                {
                    // 3a. If it is the first item, remove the empty class from
                    // the list.
                    list.classList.remove("empty");
                
                    // 3b. If it is the first item, remove the "No items yet!" item.
                    // If the list still has the empty class, it should only
                    // have the "no items" li.
                    list.children[0].remove();

                }
                // 3. Add the list item to the list.
                list.appendChild(newListItem);
                    
                // 4. Clear the text input. 
                input.value = "";

                // Reset Focus To Input After Adding
                input.focus();
            }
        }
    );
    

    console.log("Script ending!");
}