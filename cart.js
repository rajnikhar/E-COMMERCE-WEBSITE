// Function to add an item to the cart
// Define a variable to store the cart items
let cartItems = [];

function addtocart(productName, price, imageUrl) {
  if (!isLoggedIn()) {
    alert("Please login to add items to your cart.");
    window.location.href = "login.html"; // Redirect to the login page
    return;
  }
  // Check if the item already exists in the cart
  let quantity = parseInt(document.getElementById("myNum").value);

  let itemIndex = cartItems.findIndex(
    (item) => item.productName === productName
  );

  if (itemIndex !== -1) {
    // Update quantity if the item already exists
    cartItems[itemIndex].quantity += quantity;
  } else {
    // Add the new item to the cart
    cartItems.push({
      productName: productName,
      price: price,
      quantity: quantity,
      imageUrl: imageUrl,
    });
  }
  // Save cart items to local storage
  saveCartToLocalStorage();
  alert("Item added to cart");
  document.getElementById("addToCartButton").textContent = "Added";
  // Refresh the cart display
  displayCart();
  updateCartSummary();
}

// Function to update the cart display

function displayCart() {
  // Get the grid container
  let gridContainer = document.querySelector("#cart-grid");

  // Clear the grid container before displaying new items
  gridContainer.innerHTML = "";

  // Loop through the cartItems array and display each item in the grid
  cartItems.forEach((item) => {
    // Create grid items for each cart item
    let gridItem = document.createElement("div");
    gridItem.classList.add("cart-item");

    // Populate grid items with data
    gridItem.innerHTML = `
            <div class="cart-remove"><i class="fa-sharp fa-solid fa-xmark" style="padding:15px" onclick="removeItem('${
              item.productName
            }')"></i></div>
            <div class="cart-product-image"><img src="${item.imageUrl}" alt="${
      item.productName
    }" width="70"></div>
            <div class="cart-product">${item.productName}</div>
            <div class="cart-price">${item.price}</div>
            <div class="cart-quantity">${item.quantity}</div>
            <div class="cart-subtotal">${item.price * item.quantity}</div>
        `;

    // Append grid item to the grid container
    gridContainer.appendChild(gridItem);
  });
}

// Function to remove an item from the cart
function removeItem(productName) {
  // Find the index of the item to be removed
  let itemIndex = cartItems.findIndex(
    (item) => item.productName === productName
  );

  // Remove the item from the cartItems array
  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
  }

  // Save cart items to local storage
  saveCartToLocalStorage();
  // Refresh the cart display
  displayCart();
  updateCartSummary();
}

// Function to save cart items to local storage
function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to retrieve cart items from local storage
function loadCartFromLocalStorage() {
  let storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems);
  }
}

// Ensure that the DOM is fully loaded before executing JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  // Load cart items from local storage
  loadCartFromLocalStorage();
  // Display cart items
  displayCart();
  updateCartSummary();
});
// Function to update the cart summary
// Function to update the cart summary
// Function to update the cart summary
// Function to update the cart summary

// Function to update the cart summary
function updateCartSummary() {
  let totalItems = 0;
  let totalPrice = 0;
  const GST_RATE = 0.18; // Assuming a GST rate of 18%

  const cartSummaryContainer = document.getElementById("cart-summary");
  const cartSummaryHeading = document.getElementById("cart-summary-heading");

  // Clear the existing content
  cartSummaryContainer.innerHTML = "";

  // Update the cart summary heading
  cartSummaryHeading.textContent = "Cart Summary";

  // Iterate through each item in the cart
  cartItems.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  // Calculate GST
  const GST = totalPrice * GST_RATE;
  const totalPriceBeforeGST = totalPrice;
  totalPrice += GST;

  // Display total items, total price including GST, GST amount, and price before GST
  const totalItemsElement = document.createElement("div");
  totalItemsElement.textContent = `Total Items: ${totalItems}`;

  const totalPriceElement = document.createElement("div");
  totalPriceElement.textContent = `Total Price (incl. GST): ${formatCurrency(
    totalPrice
  )}`;

  const gstElement = document.createElement("div");
  gstElement.textContent = `GST (18%): ${formatCurrency(GST)}`;

  const totalPriceBeforeGSTElement = document.createElement("div");
  totalPriceBeforeGSTElement.textContent = `Price Before GST: ${formatCurrency(
    totalPriceBeforeGST
  )}`;

  // Add elements to the cart summary container
  cartSummaryContainer.appendChild(totalItemsElement);
  cartSummaryContainer.appendChild(totalPriceBeforeGSTElement);
  cartSummaryContainer.appendChild(gstElement);
  cartSummaryContainer.appendChild(totalPriceElement);
}
function formatCurrency(amount) {
  // Format amount to include commas for thousands separators
  const formattedAmount = amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return formattedAmount;
}
// Function to handle the checkout process
// Function to handle the checkout process
function checkout() {
  // Add your checkout logic here, such as redirecting to the checkout page
  // You can implement this based on your specific requirements and backend setup

  // Clear the cart items
  cartItems = [];
  // Save the updated cart to local storage
  saveCartToLocalStorage();
  // Refresh the cart display
  displayCart();
  // Update the cart summary
  updateCartSummary();

  alert("Checkout Successfully...");
  window.location.href = "index.html";
  // Example: window.location.href = "checkout.html";
}
function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}
