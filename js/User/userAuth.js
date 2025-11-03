/**
 * This file includes Functions related to authentication
 * 1. Register 
 * 2. Login
 * 3. Forgot password
 * 4. Logout
 */

{/* <script type="module"></script> */}


 export function role_ID_Generate(userRole) {
    const prefix = userRole; // or "VENDOR", "ORDER", etc.
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
    const timestamp = Date.now(); // unique based on current time
    return `${prefix}-${timestamp}-${randomNum}`;
}

let userData = JSON.parse(localStorage.getItem("userData"))||[];

// Function for handling login logic
const handleRegister = () => {
    event.preventDefault()
    const email = document.getElementById("signUp-email").value
    const name = document.getElementById("signup-name").value
    const password = document.getElementById("signup-password").value

    console.log(email, name, password)
    
    // USER ID generator
    const userID = role_ID_Generate("USER")

    const data = {
        user_id:userID,
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

function handleLogin(){
   
    const username = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value

    // console.log("Logi Details : ", username, password)

    const userData  = JSON.parse(localStorage.getItem("userData"))
   

    for (let i = 0; i < userData .length; i++) {
        if (userData [i].email === username) {
            if (userData [i].password === password) {
                let loggedInUser = {
                    name : userData [i].name,
                    loginUser_Id:userData[i].user_id,
                    // name: userData [i].name || username
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


// Make functions available globally for HTML onclick()
window.handleRegister = handleRegister;
window.handleLogin = handleLogin;