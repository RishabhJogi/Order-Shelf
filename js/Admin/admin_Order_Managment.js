let get_Order_Details=JSON.parse(localStorage.getItem("order_Details"))||[];

get_Order_Details.reverse();

 document.getElementById("Order_Details").innerHTML = get_Order_Details.map((item, index) => {
        return ` <tr>
                <td>${item.order_id}</td>
                <td>${item.name}</td>
                <td>${item.amount}</td>
                <td>${item.date}</td>
                <td><span class="status-label delivered bg-success text-white">${item.status}</span></td>
                <td><button class="btn btn-sm btn-outline bg-info text-white">View more</button></td>
              </tr>`;
    }).join("");