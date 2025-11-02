let admin_Added_New_User_List = JSON.parse(localStorage.getItem("admin_Added_New_User_List")) || [];

let admin_Added_Newuser_ImageUrl;

let updated_User_Index = null;



function handle_Admin_Added_New_User_ImageChange(event) {
    const file = event.target.files[0];
    if (file) {
        admin_Added_Newuser_ImageUrl = URL.createObjectURL(file);
        console.log("Image URL: ", admin_Added_Newuser_ImageUrl);
    } else {
        console.log("No files are present");
    }
}

function handle_Save_New_User() {
    const new_User_Name = document.getElementById("user-name").value;
    const new_User_Email = document.getElementById("user-Email").value;
    const new_User_Contact = document.getElementById("user-Contact").value;
    const new_User_Status = document.getElementById("user-Status").value;
    const currentDate = new Date().toLocaleString();

    const New_User_DetailsObj = {
        User_Name: new_User_Name,
        User_Email: new_User_Email,
        User_Contact: new_User_Contact,
        User_Status: new_User_Status,
        date: currentDate,
        ImageUrl: admin_Added_Newuser_ImageUrl,
    }
    admin_Added_New_User_List.push(New_User_DetailsObj);
    console.log("New User: ", admin_Added_New_User_List);

    localStorage.setItem("admin_Added_New_User_List", JSON.stringify(admin_Added_New_User_List));
    renderData();

    document.getElementById("user-name").value = '';
    document.getElementById("user-Email").value = '';
    document.getElementById("user-Contact").value = '';
    document.getElementById("user-Status").value = '';
    admin_Added_Newuser_ImageUrl = '';


}

function renderData() {
    document.getElementById("table-body").innerHTML = admin_Added_New_User_List.map((user, index) => {
        return `
            <tr >
         <td><img src="${user.ImageUrl}" class="user-avatar">  ${user.User_Name} 
                            </td>
                            <td> ${user.User_Email}</td>
                            <td>${user.User_Contact}</td>
                            <td class="status-active text-success">${user.User_Status}</td>
                            <td>${user.date}</td>
                           
                            <td>
  
  <button class="btn-edit btn-info" data-bs-toggle="modal" data-bs-target="#editUserModal" onclick="edit_User(${index})">
    <i class="bi bi-pen"></i> Edit
  </button>
  <button class="btn-delete btn-danger" onclick="delete_User(${index})">
    <i class="bi bi-trash3-fill"></i> Delete
  </button>
</td>
          </tr>
        `
    })
}


//  View Function -> Show full details of user
function view_User(index) {

}

//  Delete Function -> Delete Perticular Object From New user List

function delete_User(index) {
    admin_Added_New_User_List.splice(index, 1);
    localStorage.setItem("admin_Added_New_User_List", JSON.stringify(admin_Added_New_User_List));
    renderData();

}

//  Update Function -> Update Perticular Object From New user List
function handle_Update_New_User() {
    //  Replect  updated input values
    const update_User_Name = document.getElementById("update-User-name").value;
    const update_User_Email = document.getElementById("update-User-Email").value;
    const update_User_Contact = document.getElementById("update-User-Contact").value;
    const update_User_Status = document.getElementById("update-User-Status").value;
    const currentDate = new Date().toLocaleString();

    
    //    object For Update User
    const updated_User_Detailobj = {
        User_Name: update_User_Name,
        User_Email: update_User_Email,
        User_Contact: update_User_Contact,
        User_Status: update_User_Status,
        date: currentDate,
        ImageUrl: admin_Added_Newuser_ImageUrl ,
    };

  
    admin_Added_New_User_List[updated_User_Index] = updated_User_Detailobj;


    localStorage.setItem("admin_Added_New_User_List", JSON.stringify(admin_Added_New_User_List));

    //  render updated data
    renderData();

  
    document.getElementById("update-User-name").value = '';
    document.getElementById("update-User-Email").value = '';
    document.getElementById("update-User-Contact").value = '';
    document.getElementById("update-User-Status").value = '';
    admin_Added_Newuser_ImageUrl = '';
    updated_User_Index = null;

    // ✅ Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("editUserModal"));
    if (modal) modal.hide();
}


// Reflect the value of Existing User Details Into the Update Modal
function edit_User(index) {
    const set_user_Detail = admin_Added_New_User_List[index];
    document.getElementById("update-User-name").value = set_user_Detail.User_Name;
    document.getElementById("update-User-Email").value = set_user_Detail.User_Email;
    document.getElementById("update-User-Contact").value = set_user_Detail.User_Contact;
    document.getElementById("update-User-Status").value = set_user_Detail.User_Status;
    updated_User_Index = index;



}
