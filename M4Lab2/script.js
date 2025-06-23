var shoppingList = [];

function addItem(item) {
    if (item == null || item == "") {
        console.log("Cannot add empty item to the shopping list.");
        return false;
    }

    for (var i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].toLowerCase() === item.toLowerCase()) {
            console.log("Item already exists in the shopping list.");
            return false;
        }
    }
    shoppingList.push(item);
    console.log("Item added to the shopping list.");
    return true;
}

function removeLastItem() {
    if (shoppingList.length === 0) {
        console.log("No items to remove from the shopping list.");
        return null;
    }
    var removedItem = shoppingList.pop();
    console.log("Removed item from the shopping list:", removedItem);
    return removedItem;
}

function displayList() {
    if (shoppingList.length === 0) {
        console.log("Current Shopping List:");
        if (shoppingList.length === 0) {
            console.log("List is empty.");
        } else {
            for (var i = 0; i < shoppingList.length; i++) {
                console.log(i + 1 + ". " + shoppingList[i]);
            }
    }
    console.log("Shopping List:");
    for (var i = 0; i < shoppingList.length; i++) {
        console.log(i + 1 + ". " + shoppingList[i]);
    }
}

function displayList() {
    if (shoppingList.length === 0) {
        console.log("Shopping list is empty.");
        return;
    }
    console.log("Current Shopping List:");
    for (var i = 0; i < shoppingList.length; i++) {
        console.log(i + 1 + ". " + shoppingList[i]);
    }
}

function filterItems(searchTerm) {
    var matchingItems = [];

    if (searchTerm == null || searchTerm == "") {
        return matchingItems;
    }

    var lowerCaseSearchTerm = searchTerm.toLowerCase();
    for (var i = 0; i < shoppingList.length; i++) {
        var lowerItem = shoppingList[i].toLowerCase();
        if (lowerItem.includes(lowerCaseSearchTerm)) {
            matchingItems.push(shoppingList[i]);
        }
    }
    return matchingItems;
}
    }
function updateDisplayedList() {
    var listElement = document.getElementById("shoppingListDisplay");

    listElement.innerHTML = ""; // Clear the current list display

    for (var i = 0; i < shoppingList.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = shoppingList[i];
        listElement.appendChild(listItem);
    }

    if (shoppingList.length === 0) {
        var emptyMessage = document.createElement("li");
        emptyMessage.textContent = "Your shopping list is empty.";
        emptyMessage.style.fontStyle = "italic";
        emptyMessage.style.color = "#999";
        listElement.appendChild(emptyMessage);
    }
}

function addItemFromInput() {
    var inputElement = document.getElementById("itemInput");
    var newItem = inputElement.value.trim();

    if (addItem(item)) {
        var input = document.getElementById("itemInput");
        var item = input.value.trim();

        if (addItem(item)) {
            input.value = ""; // Clear the input field
            updateDisplayedList();

            document.getElementById("searchResults").innerHTML = ""; 
        } else {
            alert("Item already exists in the shopping list.");
        
        }
    }

    function removeLastItem() {
        var removedItem = removeLastItem();
            updateDisplayedList();

             if (removedItem === null) {
                alert("No items to remove from the shopping list.");   

                document.getElementById("searchResults").innerHTML = "";
        }

        function searchItems() {
            var searchTerm = document.getElementById("searchInput").value.trim();
            var results = filterItems(searchTerm);
            var resultsElement = document.getElementById("searchResults");

            resultsElement.innerHTML = ""; // Clear previous search results

            if (searchTerm == "") {
                resultsElement.innerHTML = "";
                return;
            }
            if (results.length === 0) {
               resultsElement.innerHTML = "<div class='search-results'><strong>No results found for '" + searchTerm + "'</strong><ul>";
                for (var i = 0; i < results.length; i++) {
                    resultsHTML += "<li>" + results[i] + "</li>";
               }
               resultsHTML += "</ul></div>";
                resultsElement.innerHTML = resultsHTML;
                }
            }
        document.getElementById("itemInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addItemFromInput();
            }
        });  

        document.getElementById("searchInput").addEventListener("input", function(event) {
            searchItems();
        });
        console.log("=== Testing Shopping List ===");

        addItem("Apples");
        addItem("Bananas");
        addItem("Milk");
        addItem("Eggs");
        addItem("apples"); // Should not add (duplicate item)
        displayList();

        console.log("Items cotaining 'a':", filterItems("a"));
        console.log("Items containing 'milk':", filterItems("milk"));

        removeLastItem();
        displayList();

        updateDisplayedList();
        }
}
