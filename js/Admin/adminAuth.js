/**
 * This file includes Functions related to Admin authentication
 * 1. Register 
 * 2. Login
 * 3. Forgot password
 * 4. Logout
 */

let adminData = JSON.parse(localStorage.getItem("adminData")) || [];

// Function for handling login logic
function handleRegister() {
    const email = document.getElementById("admin_email").value
    const name = document.getElementById("admin_name").value
    const password = document.getElementById("admin_pass").value

    console.log(email, name, password)

    const data = {
        email: email,
        name: name,
        password: password,
    }

    adminData.push(data);
    localStorage.setItem("adminData", JSON.stringify(adminData));

    setTimeout(() => {
        window.location.href = "/html/Admin/adminLoginPage.html";
    }, 1000)
    alert("You have SigedUp successfully");


}

function handleLogin() {
    event.preventDefault()
    const username = document.getElementById("Admin_email").value
    const password = document.getElementById("Admin_pass").value

    console.log("Logi Details : ", username, password)

    const adminList = JSON.parse(localStorage.getItem("adminData"))
    console.log("AdminList at login handle: ", adminList);

    for (let i = 0; i < adminList.length; i++) {
        if (adminList[i].email === username) {
            if (adminList[i].password === password) {

                console.log("Stored:", localStorage.getItem("loggedInUser"));

               
                setTimeout(() => {
                    window.location.href = "/html/Admin/adminDashboardPage.html";
                }, 3000);
                alert("You have LogedIn successfully");

                break;
            }
            else {
                alert("Your password is incorrect!!");
                break;
            }
        }
    }



}
window.handleRegister = handleRegister;
window.handleLogin = handleLogin;