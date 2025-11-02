/**
 * This file includes Functions related to authentication
 * 1. Register 
 * 2. Login
 * 3. Forgot password
 * 4. Logout
 */



let userData = JSON.parse(localStorage.getItem("userData"))||[];

// Function for handling login logic
function handleRegister() {
    event.preventDefault()
    const email = document.getElementById("signUp-email").value
    const name = document.getElementById("signup-name").value
    const password = document.getElementById("signup-password").value

    console.log(email, name, password)

    const data = {
        email: email,
        name: name,
        password: password,
    }

    userData.push(data);
    localStorage.setItem("userData", JSON.stringify(userData));
    // alert("You have SigedUp successfully");

     setTimeout(() => {
                    window.location.href = "/html/User/userLoginPage.html";
                }, 1000);
                

}

function handleLogin() {
   
    const username = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value

    console.log("Logi Details : ", username, password)

    const userList = JSON.parse(localStorage.getItem("userData"))
    console.log("UserList at login handle: ", userList);

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].email === username) {
            if (userList[i].password === password) {
                let loggedInUser = {
                    name : userList[i].email,
                    // name: userList[i].name || username
                };
                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                console.log("Stored:", localStorage.getItem("loggedInUser"));
                
                // add a 1-second delay before redirect
                setTimeout(() => {
                    window.location.href = "/html/User/userDashboardPage.html";
                }, 1000);
                
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