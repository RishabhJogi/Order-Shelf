// Load Data
const get_Order_Details = JSON.parse(localStorage.getItem("all_Order_List")) || [];
const vendor_List = JSON.parse(localStorage.getItem("vendorData")) || [];

// ====================
//  FUNCTION: Edit Order
// ====================
function editOrder(OrderIndex) {
  const order = get_Order_Details[OrderIndex];

  // Build vendor dropdown dynamically
  const vendorOptions = vendor_List.length
    ? vendor_List.map((v) => `<option value="${v.vendor_Id}">${v.first_Name}</option>`).join("")
    : `<option disabled>No vendors available</option>`;

  // Fill modal content dynamically
  document.getElementById("orderUpdateModalBody").innerHTML = `
    <div id="vendor_allot_dropdown">
      <label for="vendorSelect" class="form-label fw-bold mb-2">Select Vendor:</label>
      <select class="form-select mb-3" id="vendorSelect">
        <option selected disabled>Choose a Vendor</option>
        ${vendorOptions}
      </select>

      <div class="d-flex justify-content-end">
        <button class="btn btn-success" onclick="allotVendor(${OrderIndex})">Allot</button>
      </div>
    </div>
  `;
}

// ====================
//  FUNCTION: Allot Vendor
// ====================
function allotVendor(orderIndex) {
  const selectedVendorId = document.getElementById("vendorSelect").value;
  console.log("selected Vendor ID: ",selectedVendorId)
  const order = JSON.parse(localStorage.getItem("all_Order_List"))
  const fetchedOrder = order[orderIndex]

  console.log("Fertched Order: ", fetchedOrder);

  if (!selectedVendorId || selectedVendorId === "Choose a Vendor") {
    alert("Please select a vendor first!");
    return;
  }

  // Update order data
  get_Order_Details[orderIndex].vendor_ID = selectedVendorId;

  // Save updated list to localStorage
  localStorage.setItem("all_Order_List", JSON.stringify(get_Order_Details));

  alert(`Vendor ${selectedVendorId} successfully allotted to order ${get_Order_Details[orderIndex].order_id}`);

  // Close modal (Bootstrap method)
  const modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
  modal.hide();

  // Refresh the table
  renderOrdersTable();
}

// ====================
//  FUNCTION: Render All OrdersTable
// ====================
function renderOrdersTable() {
  document.getElementById("Order_Details").innerHTML = get_Order_Details.map((item, index) => `
    <tr>
      <td>${item.order_id}</td>
      <td>${item.customerName}</td>
      <td>${item.final_Amount}</td>
      <td>${item.currentDate}</td>
      <td><span class="status-label bg-success text-white px-2 py-1 rounded">${item.delivery_Status}</span></td>
      <td>${item.vendor_ID ? item.vendor_ID : "Not Allotted"}</td>
      <td>
        <button class="btn btn-sm btn-info text-white" data-bs-toggle="modal" data-bs-target="#orderDetailsModal" onclick="showOrderDetails(${index})">
          <i class="bi bi-eye"></i>
        </button>

        <button class="btn btn-sm btn-warning text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="editOrder(${index})">
          <i class="bi bi-pencil-square"></i>
        </button>
      </td>
    </tr>
  `).join("");
}

// Initial Render
renderOrdersTable();

// ====================
//  FUNCTION: Show Products  Details
// ====================
function showOrderDetails(index) {
  const order = get_Order_Details[index];
  const cartItems = order.cart_Item || [];

  document.getElementById("modalCustomerName").innerText = order.customerName;
  document.getElementById("modalOrderID").innerText = order.order_id;
  document.getElementById("modalOrderDate").innerText = order.currentDate;
  document.getElementById("modalOrderAmount").innerText = order.final_Amount;

  document.getElementById("modalProductList").innerHTML = cartItems.map((item) => `
    <tr>
      <td>${item.name}</td>
      <td>₹${item.Price}</td>
    </tr>
  `).join("");
}
