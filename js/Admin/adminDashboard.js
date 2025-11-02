
let total_Sales = 0;
let total_order=0;
let totaL_Customer=0;


//  Get Order Details from Local Stotage
let get_Order_Details=JSON.parse(localStorage.getItem("order_Details"))||[];
 
//  Get Order Counts from Local Stotage
let get_Order_Count=JSON.parse(localStorage.getItem("order_Details"))||[];

//  Get User Counts from Local Stotage
let get_User_Counts=JSON.parse(localStorage.getItem("admin_Added_New_User_List"))||[];

// Fetching Data For Total Revenue  From Local Storage
const total_Revenue = JSON.parse(localStorage.getItem("final_Amount")) || [];


// Total revenue Calculated
function total_Revenue_Calculation()
{
    // console.log(total_Sales);
    // console.log("Total Rev:", total_Revenue);
    const revenueGenerated = Number(total_Revenue);

    // console.log("Revenuse generated :" , revenueGenerated)

    total_Sales=parseInt(total_Sales)+(total_Revenue);
    console.log(total_Sales)
    return total_Sales;
}

total_Revenue_Calculation()

//  Set Total Revue 
document.getElementById("total_Revenue").innerText = total_Sales;


//  SET TOTAL ORDER COUNT
document.getElementById("total_Order_Count").innerText = total_order=get_Order_Count.length;

// SET TOTAL CUSTOMER COUNT
document.getElementById("total_Customer_Count").innerText = get_User_Counts.length;



// PRINT RECENT ORDER DETAILS 

get_Order_Details.reverse();

let last_Five_Order=get_Order_Details.slice(0,5);

document.getElementById("recentOrdersTable").innerHTML=last_Five_Order.map((item)=>{

    return`
    <tr>
          <tr>
        <td>${item.order_id}</td>
        <td>${item.name}</td>
        <td>${item.amount}</td>
        <td>${item.date}</td>
      </tr>
    `
})


// MAPPING RECENT ORDER DETAILS
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("salesChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "Sales (₹)",
                data: [1200, 1900, 3000, 5000, 2000, 3000, 4000],
                borderColor: "#1e3a8a",
                backgroundColor: "rgba(12, 31, 50, 0.1)",
                fill: true,
                tension: 0.6
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});

