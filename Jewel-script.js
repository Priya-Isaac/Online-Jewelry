// Cart array to hold items
const cart = [];

// Function to add item to cart automatically by product info
function autoAddToCart(productId, productName, productPrice, quantity = 1) {
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ id: productId, name: productName, price: productPrice, qty: quantity });
  }
}

// Function to simulate immediate buy after adding to cart
function autoBuy() {
  if (cart.length === 0) {
    console.log('Cart is empty, nothing to buy.');
    return;
  }
  // Replace below with real checkout/payment integration
  alert('Buying items:\n' + JSON.stringify(cart));
  // Example redirect to payment page
  // window.location.href = '/checkout';
}

// Example usage: automatically add items and buy
document.addEventListener('DOMContentLoaded', () => {
  // Add specific items automatically
  autoAddToCart('101', 'Kemp Necklace', 750, 1);
  autoAddToCart('102', 'Temple Earrings', 350, 2);

  // Trigger auto buy immediately after adding items
  autoBuy();
});
