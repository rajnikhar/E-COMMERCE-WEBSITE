let cartItems = [];

function addToCart(productId) {
  const product = document.querySelector(`.product[data-id="${productId}"]`);
  const productName = product.getAttribute("data-name");
  const productPrice = parseFloat(product.getAttribute("data-price"));

  const existingItem = cartItems.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1,
    });
  }

  updateCartUI();
}

function updateCartUI() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalElement = document.getElementById("total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cartItems.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");
    cartItemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <span>Quantity: ${item.quantity}</span>
        `;
    cartItemsContainer.appendChild(cartItemElement);

    total += item.price * item.quantity;
  });

  totalElement.textContent = total.toFixed(2);
}

function checkout() {
  alert("Thank you for your purchase!");
  resetCart();
}

function resetCart() {
  cartItems = [];
  updateCartUI();
}
