 // Initialize cart array to hold the items
let cart = [];

// Function to add items to the cart
function addToCart(itemName, price) {
  // Add the item to the cart
  cart.push({ itemName, price });
  
  // Update the cart display
  updateCart();
}

// Function to update the cart display and total
function updateCart() {
  const cartElement = document.getElementById('cart');
  const totalElement = document.getElementById('total');
  
  // Clear the current cart display
  cartElement.innerHTML = '';

  // Calculate total price
  let totalPrice = 0;
  cart.forEach((item, index) => {
    totalPrice += item.price;
    
    // Create a list item for each cart item
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.itemName} - $${item.price.toFixed(2)}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartElement.appendChild(li);
  });
  
  // Update the total price display
  totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
  // Remove the item at the given index
  cart.splice(index, 1);
  
  // Update the cart display
  updateCart();
}

// Function to place the order
function placeOrder() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  // Display the order summary and clear the cart
  let orderSummary = 'You have ordered:\n';
  cart.forEach(item => {
    orderSummary += `- ${item.itemName} : $${item.price.toFixed(2)}\n`;
  });
  orderSummary += `Total: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`;
  
  alert(orderSummary);
  
  // Clear the cart
  cart = [];
  updateCart();
}
