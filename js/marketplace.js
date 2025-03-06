// Function to add product to wardrobe
function addToWardrobe(button) {
    // Get the product details
    const card = button.parentElement;
    const productName = card.querySelector("h3").innerText;
    const productPrice = card.querySelector("p").innerText;
    const productImage = card.querySelector("img").src;
  
    // Create a product object
    const product = {
      name: productName,
      price: productPrice,
      image: productImage
    };
  
    // Get existing wardrobe items from local storage
    let wardrobe = JSON.parse(localStorage.getItem("wardrobe")) || [];
  
    // Add the new product to the wardrobe
    wardrobe.push(product);
  
    // Save updated wardrobe back to local storage
    localStorage.setItem("wardrobe", JSON.stringify(wardrobe));
  
    // Show confirmation message
    alert(`${productName} added to wardrobe!`);
  }
  