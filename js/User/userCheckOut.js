// Fetch cart items from localStorage
const checkOutItem = JSON.parse(localStorage.getItem("cart_item")) || [];
console.log("Checkout Items:", checkOutItem);

let total_Amount = 0;

//  Get Subtotal from Local Storage
let subtotal = JSON.parse(localStorage.getItem("SUbTotal")) || 0;
console.log("Subtotal is:", subtotal);

let shippingCharge = 0;
let final_Amount = 0;

//  Function to calculate shipping charge (5%)
function calculate_Shipping_Charge() {
    shippingCharge = subtotal * 0.05;
    document.getElementById("shipping-Charge").innerText = `₹${shippingCharge.toFixed(2)}`;
    return shippingCharge;
}

//  Render checkout items and calculate total
document.getElementById("final-checkout-item").innerHTML = checkOutItem.map((item) => {
    total_Amount += Number(item.Price);

    return `
      <li class="list-group-item d-flex justify-content-between align-items-center lh-sm border-bottom py-3">
        <div class="d-flex align-items-center">
          <div class="checkout-img-div me-3">
            <img src="${item.ImageUrl}" 
                 alt="${item.name}" 
                 class="img-fluid rounded-3" 
                 style="width: 60px; height: 60px; object-fit: cover;">
          </div>
          <div>
            <h6 class="my-0 fw-semibold">${item.name}</h6>
            <small class="text-muted d-block >${item.description}</small>
            <small class="text-secondary">${item.jonours} | ${item.Category}</small>
          </div>
          </div>
          <span class="fw-bold text-dark">
  ₹${Number(item.Price).toLocaleString()} × ${item.quantity}
</span>

      </li>
    `;
}).join("");

function generateOrderID() {
    const prefix = "CUST"; 
    const date = new Date();

    // Format date as YYYYMMDD
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');

    // Generate a random 6-character alphanumeric code
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPart = "";
    for (let i = 0; i < 6; i++) {
        randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Combine everything into one professional ID
    return `${prefix}-${yyyy}${mm}${dd}-${randomPart}`;
}




function getBillingDetails(event) {
    event.preventDefault();
    console.log("INSIDE THE BILLING DETAILS FUNCTION");

    // Get form field values
    const full_name = document.getElementById("billing-firstName").value.trim();
    const contact = document.getElementById("billing-contact").value.trim();
    const email = document.getElementById("billing-email").value.trim();
    const city = document.getElementById("billing-city").value.trim();
    const state = document.getElementById("billing-state").value.trim();
    const zip = document.getElementById("billing-zip").value.trim();
    const country = document.getElementById("billing-country").value.trim();
    const address = document.getElementById("billing-address").value.trim();


    // Generate order ID
    const customer_id = generateOrderID();

    // Create billing details object
    const billing_details = {
        customer_id,
        full_name,
        contact,
        email,
        address: {
            address,
            city,
            state,
            zip,
            country
        },
       
    };

    // Store in localStorage
    localStorage.setItem("billing_details", JSON.stringify(billing_details));

    // Store total amount too
    const totalAmount = document.getElementById("total-amount").innerText;
    localStorage.setItem("final_Amount", JSON.stringify(totalAmount));

  

    // Redirect to receipt page
    setTimeout(() => {
        window.location.href = "/html/User/userFinalRecieptPage.html";
    }, 500);
}



// Update totals
if (checkOutItem.length > 0) {
    // Calculate shipping and final total
    const shipping = calculate_Shipping_Charge();
    final_Amount = subtotal + shipping;


    // Display subtotal, shipping, and total
    document.getElementById("subtotal").innerText = `${subtotal.toLocaleString()}`;
    document.getElementById("total-amount").innerText = `${final_Amount.toLocaleString()}`;

    // Save final amount to localStorage
    localStorage.setItem("final_Amount", JSON.stringify(final_Amount));

   

} else {
    //  Handle empty cart
    document.getElementById("final-checkout-item").innerHTML = `
      <li class="list-group-item text-center py-4">
        <h6 class="text-muted mb-0">🛒 Your cart is empty!</h6>
      </li>`;
    document.getElementById("subtotal").innerText = "₹0";
    document.getElementById("shipping-Charge").innerText = "₹0";
    document.getElementById("total-amount").innerText = "₹0";
}
