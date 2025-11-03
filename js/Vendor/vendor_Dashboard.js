// Getting Order of This Vendor from local Storage Alloted by Admin
let all_Order_Details = JSON.parse(localStorage.getItem("all_Order_List")) || [];
console.log("All Orders:", all_Order_Details);


// Active Vendor
let active_Vendor_details = JSON.parse(localStorage.getItem("loggedInVendor")) || {};
let active_Vendor_ID = active_Vendor_details.id;
console.log("Active Vendor ID:", active_Vendor_ID);

let activeVendorAssignedOrder = [];

// 🔹 Function to filter orders assigned to this vendor
function fetchVendorOrder(vendorID) {
    console.log("Vendor ID in function:", vendorID);
    activeVendorAssignedOrder = all_Order_Details.filter(order => order.vendor_ID === vendorID);
    console.log("Assigned Orders:", activeVendorAssignedOrder);

    renderVendorOrders();
}




//  Function to render vendor orders in table
function renderVendorOrders() {
    const tableBody = document.getElementById("active-Orders-List");

    if (!tableBody) return console.error("Table element with ID 'active-Orders-List' not found!");

    if (activeVendorAssignedOrder.length === 0) {
        tableBody.innerHTML = `
      <tr><td colspan="7" class="text-center text-muted">No orders assigned yet.</td></tr>
      `;
        return;
    }

    tableBody.innerHTML = activeVendorAssignedOrder.map((item, index) => `
    <tr>
        <td>${item.order_id}</td>
        <td>${item.currentDate || "N/A"}</td>
        <td>${item.customerName || "N/A"}</td>
        <td>${item.cart_Item?.length || "N/A"}</td>
        <td>₹${item.final_Amount}</td>
        
        <td>
          ${item.delivery_Status && item.delivery_Status !== ""
            ? `<span class="badge bg-success">${item.delivery_Status}</span>`
            : `
            <select class="form-select form-select-sm" onchange="updateOrderStatus(${index}, this.value)">
                  <option value="Pending" ${item.delivery_Status === "Pending" ? "selected" : ""}>Pending</option>
                  <option value="Processing" ${item.delivery_Status === "Processing" ? "selected" : ""}>Processing</option>
                  <option value="Delivered" ${item.delivery_Status === "Delivered" ? "selected" : ""}>Delivered</option>
                  <option value="Cancelled" ${item.delivery_Status === "Cancelled" ? "selected" : ""}>Cancelled</option>
                </select>
                
              `
        }
            </td>
            
            <td class="action">
            <i class="bi bi-eye-fill text-info" data-bs-toggle="modal" data-bs-target="#View_Modal" title="View Details" onclick="show_Vendor_Assigned_Product(${index})"></i>
</td>

</tr>
`).join("");
}



//  Function to update order status in localStorage
console.log("Outside the Update Status Fucntion");

function updateOrderStatus(index, newStatus) {

    console.log("Inside the Update Status Fucntion");
    ``
    const selectedOrder = activeVendorAssignedOrder[index];
    const orderId = selectedOrder.order_id;

    console.log(` Updating Order ${orderId} to ${newStatus}`);

    // Update in both arrays
    selectedOrder.delivery_Status = newStatus;

    const orderIndex = all_Order_Details.findIndex(order => order.order_id === orderId);
    if (orderIndex !== -1) {
        all_Order_Details[orderIndex].delivery_Status = newStatus;
    }

    // Save updated list to localStorage
    localStorage.setItem("all_Order_List", JSON.stringify(all_Order_Details));

    // Refresh the list instantly
    renderVendorOrders();

    // Optional alert or toast
    alert(`Order ${orderId} status updated to "${newStatus}"`);
}


// MApping the Cart item to View More Modal

function show_Vendor_Assigned_Product(index) {
    // console.log("Assigned Orders :", activeVendorAssignedOrder);
    console.log("Inside the Assigned Fucntion");
    
    let orderObject=activeVendorAssignedOrder[index];

    console

    let Vendor_assigned_CartItem = activeVendorAssignedOrder[index].cart_Item;

    console.log("Vendor Assigned Cart Item", Vendor_assigned_CartItem);

    document.getElementById("modalOrderID").innerText = orderObject.order_id;
    console.log("Order Id",orderObject.order_id);
    
    document.getElementById("modalCustomerName").innerText = orderObject.customerName;
   
    document.getElementById("modalDate").innerText = orderObject.currentDate
;
    document.getElementById("modalAmount").innerText = orderObject.final_Amount;



    document.getElementById("modalCartItems").innerHTML = Vendor_assigned_CartItem.map((item,index)=>{
        return `
        <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.Price}</td>
        
        </tr>
        `
    }).join("")

}

// Run this on page load to show orders for active vendor
fetchVendorOrder(active_Vendor_ID);

window.updateOrderStatus = updateOrderStatus;
window.show_Vendor_Assigned_Product = show_Vendor_Assigned_Product;
