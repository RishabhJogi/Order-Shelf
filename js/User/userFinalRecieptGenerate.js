const cart_Item_List = JSON.parse(localStorage.getItem("cart_item")) || [];


const get_User_Id = JSON.parse(localStorage.getItem("userData")) || [];

const order_Details = JSON.parse(localStorage.getItem("billing_details")) || [];
const final_Amount = JSON.parse(localStorage.getItem("final_Amount")) || [];

const Order_Details_List = JSON.parse(localStorage.getItem("all_Order_List")) || [];

//  set the Billing details to Local Storage
const date = new Date().toLocaleString();
let all_Order_List = JSON.parse(localStorage.getItem("all_Order_List")) || [];
const all_Orders_Data = {
    // console.log("inisde the customer details");

    // User ID GET FROM Imported JS FILE
    user_Id: get_User_Id.user_id,


    // ORDER ID GET FROM  BILLING DETAILS
    order_id: order_Details.customer_id,

    // ASSING ARRAY OF CART ITEM
    cart_Item: cart_Item_List,

    Item_Quantity: cart_Item_List.quantity,
    currentDate: date,

    vendor_ID: null,
    delivery_Status: "Processing",

    customerName:order_Details.full_name,
    
    final_Amount:final_Amount,  
}

all_Order_List.push(all_Orders_Data);

localStorage.setItem("all_Order_List", JSON.stringify(all_Order_List));

// cart_Item_List.push([]);
localStorage.removeItem("cart_item",JSON.stringify(cart_Item_List))





document.getElementById("item-list").innerHTML = cart_Item_List.map((item, index) => {
    return `
    <tr>
    <td class="d-flex align-items-center">
        <img src="${item.ImageUrl}" alt="${item.name}" 
             class="me-2 rounded" 
             style="width:50px; height:60px; object-fit:cover;">
        ${item.name}
    </td>
    <td>${item.quantity}×</td>
    <td><i class="bi bi-currency-rupee"></i>${item.Price}</td>
</tr>

`
}).join("");


document.getElementById("customer-name").innerText = order_Details.full_name;

document.getElementById("customer-orderID").innerText = order_Details.customer_id

document.getElementById("customer-contact").innerText = order_Details.contact;


// const completeAddress = order_Details.address.
document.getElementById("customer-email").innerText = order_Details.email
document.getElementById("customer-address").innerText = order_Details.address.state + " , " + order_Details.address.country + " , " + order_Details.address.pincode


// const totalCalculation = calculateTotal()
document.getElementById("grand-total").innerText = final_Amount;
setTimeout(()=>{
     window.location.href="/html/User/userDashboardPage.html";
},5000)