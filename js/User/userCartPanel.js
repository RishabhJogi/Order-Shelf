const myCartItem_List = JSON.parse(localStorage.getItem("cart_item")) || [];
const cartContainer = document.getElementById("myCartItem");

console.log("cart Item : ", myCartItem_List);

// Set Total Number of Items In Cart
function cartItemCount() {
  document.getElementById("cart-Item-Count").innerText = myCartItem_List.length;
}

// Update subtotal
function updateSubtotal() {
  console.log("Inside the subtotal function: ");

  const subtotal = myCartItem_List.reduce(
    (sum, item) => sum + (item.Price || 0) * (item.quantity || 1),
    0
  );


  document.getElementById("cartSubtotal").innerText = subtotal.toFixed(2);

  localStorage.setItem("SUbTotal",JSON.parse(subtotal));

}

// Render cart items
function renderCartItems() {
  if (myCartItem_List.length === 0) {
    cartContainer.innerHTML = `
      <tr>
        <td colspan="5" class="text-center py-5">
          <h5>Your cart is empty 🛒</h5>
          <p class="text-muted">Add some products to see them here.</p>
        </td>
      </tr>`;
    cartItemCount()
    document.getElementById("checkoutBtn").classList.add("disabled");
    return;
  }

  cartContainer.innerHTML = myCartItem_List
    .map((item, index) => {
      return `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${item.ImageUrl || './assets/default.jpg'}"
                   class="cart-img me-3"
                   alt="${item.name}">
              <div>
                <h6 class="fw-semibold mb-1">${item.name}</h6>
                <p class="text-muted small mb-0">Genre: ${item.jonours || 'N/A'}</p>
                <p class="text-muted small mb-0">Category: ${item.Category || 'N/A'}</p>
                <p class="text-success small mb-0"><i class="bi bi-circle-fill me-1 small"></i>In Stock</p>
              </div>
            </div>
          </td>

         <td>₹${(Number(item.Price) || 0).toFixed(2)}</td>
          <td class="text-center">
            <div class="input-group justify-content-center align-items-center qty-group">
              <button class="btn btn-light border" onclick="updateQuantity(${index}, -1)">
                <i class="bi bi-dash"></i>
              </button>
              <span class="px-3 fw-semibold">${item.quantity || 1}</span>
              <button class="btn btn-light border" onclick="updateQuantity(${index}, 1)">
                <i class="bi bi-plus"></i>
              </button>
            </div>
          </td>

          <td>₹${((item.Price || 0) * (item.quantity || 1)).toFixed(2)}</td>

          <td class="text-center">
            <button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${index})">
              <i class="bi bi-trash"></i> Remove
            </button>
          </td>
        </tr>
      `;
    })
    .join("");
  cartItemCount()
  updateSubtotal();
}


// Update item quantity
function updateQuantity(index, change) {
  if (!myCartItem_List[index].quantity) myCartItem_List[index].quantity = 1;
  myCartItem_List[index].quantity += change;
  if (myCartItem_List[index].quantity < 1) myCartItem_List[index].quantity = 1;

  localStorage.setItem("cart_item", JSON.stringify(myCartItem_List));
  renderCartItems();
  cartItemCount()
}

// Remove item
function removeFromCart(index) {
  myCartItem_List.splice(index, 1);
  localStorage.setItem("cart_item", JSON.stringify(myCartItem_List));
  renderCartItems();
}

// Initialize
renderCartItems();
