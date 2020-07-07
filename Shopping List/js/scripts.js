function doSomeStuff()
{
    console.log("Stuff has been done.");
}


{
    console.log("Script starting!");
    // querySelector will use CSS selector syntax to select HTML elements.
    
    // <input type="text">
    const input = document.querySelector("input");
    // <a href="#">Add Item</a>
    const addButton = document.querySelector("a");
    // <ul class="empty">
    const list = document.querySelector("ul");

    addButton.addEventListener("click", doSomeStuff);
    

    console.log("Script ending!");
}