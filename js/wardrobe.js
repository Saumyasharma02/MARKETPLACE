// Function to load wardrobe items on page load
function loadWardrobe() {
    const wardrobeItems = document.getElementById("wardrobe-items");
    wardrobeItems.innerHTML = ""; // Clear existing items
  
    // Get saved wardrobe items from local storage
    let wardrobe = JSON.parse(localStorage.getItem("wardrobe")) || [];
  
    if (wardrobe.length === 0) {
      wardrobeItems.innerHTML = "<p>Your wardrobe is empty!</p>";
      return;
    }
  
    // Loop through the wardrobe items and display them
    wardrobe.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("wardrobe-item");
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="80">
        <div>
          <h4>${item.name}</h4>
          <p>${item.price}</p>
          <button onclick="removeFromWardrobe(${index})">Remove</button>
        </div>
      `;
      wardrobeItems.appendChild(itemElement);
    });
  }
  
  // Function to remove an item from the wardrobe
  function removeFromWardrobe(index) {
    let wardrobe = JSON.parse(localStorage.getItem("wardrobe")) || [];
    wardrobe.splice(index, 1); // Remove item at the given index
    localStorage.setItem("wardrobe", JSON.stringify(wardrobe));
    loadWardrobe(); // Reload wardrobe
  }
  
  // Load wardrobe when the page loads
  document.addEventListener("DOMContentLoaded", loadWardrobe);
  