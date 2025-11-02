const finalItemList = JSON.parse(localStorage.getItem("cart_item")) || [];

const userDetails = JSON.parse(localStorage.getItem("billing_details")) || [];
const final_Amount = JSON.parse(localStorage.getItem("final_Amount")) || [];

const Order_Details_List = JSON.parse(localStorage.getItem("order_Details")) || [];

//  set the Billing details to Local Storage
const date= new Date().toLocaleString();

function upload_Customer_detail() {
    // console.log("inisde the customer details");
    
    const customer_DetailObj = {
        name: userDetails.full_name,
        order_id: userDetails.customer_id,
        contact: userDetails.contact,
        amount: final_Amount,
        date:date,
    }
    Order_Details_List.push(customer_DetailObj);

    localStorage.setItem("order_Details", JSON.stringify(Order_Details_List));

}


upload_Customer_detail();




document.getElementById("item-list").innerHTML = finalItemList.map((item, index) => {
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


document.getElementById("customer-name").innerText = userDetails.full_name;

document.getElementById("customer-orderID").innerText = userDetails.customer_id

document.getElementById("customer-contact").innerText = userDetails.contact;


// const completeAddress = userDetails.address.
document.getElementById("customer-email").innerText = userDetails.email
document.getElementById("customer-address").innerText = userDetails.address.state + " , " + userDetails.address.country + " , " + userDetails.address.pincode


// const totalCalculation = calculateTotal()
document.getElementById("grand-total").innerText = final_Amount;

