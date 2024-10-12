let cart = [];
const plants = [
  { id: 0, name: "Succulent", price: 10 },
  { id: 1, name: "Fern", price: 15 },
  { id: 2, name: "Cactus", price: 20 }
];

function addToCart(plantId) {
  const plant = plants.find(p => p.id === plantId);
  cart.push(plant);
  updateCartUI();
}

function updateCartUI() {
  document.getElementById('cart-count').innerText = cart.length;
  
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  
  let totalCost = 0;
  
  cart.forEach((plant, index) => {
    totalCost += plant.price;
    
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      <p>${plant.name} - $${plant.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(cartItem);
  });
  
  document.getElementById('total-items').innerText = cart.length;
  document.getElementById('total-cost').innerText = totalCost;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}
