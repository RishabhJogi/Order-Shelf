/**
 * This file includes Functions related to authentication
 * 1. Register 
 * 2. Login
 * 3. Forgot password
 * 4. Logout
 */

// import { role_ID_Generate } from "/js/User/Auth.js";
 export function role_ID_Generate(userRole) {
    const prefix = userRole; // or "VENDOR", "ORDER", etc.
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
    const timestamp = Date.now(); // unique based on current time
    return `${prefix}-${timestamp}-${randomNum}`;
}


let vendorData = JSON.parse(localStorage.getItem("vendorData"))||[];

// Function for handling login logic
function handle_Vendor_Registeration() {
    event.preventDefault()
    const Fname = document.getElementById("First-Name").value
    const Lname = document.getElementById("Last-Name").value

    const email = document.getElementById("Email").value
    const password = document.getElementById("Password").value

      // USER ID generator
        const vendorID = role_ID_Generate("VEDR")

    const data = {
        vendor_Id:vendorID,
        first_Name: Fname,
        Last_Name: Lname,
        email: email,
        password: password,
    }

    vendorData.push(data);
    localStorage.setItem("vendorData", JSON.stringify(vendorData));
    // alert("You have SigedUp successfully");

     setTimeout(() => {
                    window.location.href = "/html/Vendor/Vendor_Login.html";
                }, 1000);
                

}

function handle_Vendor_Login() {
 
   console.log("Vendor Loogin Fuction" )

   event.preventDefault()
    const username = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value

    console.log(username,password);
    

    const vendorList = JSON.parse(localStorage.getItem("vendorData"))
    console.log("Vendor List at login handle: ", vendorList);

    for (let i = 0; i < vendorList.length; i++) {
        if (vendorList[i].email === username) {
            // console.log("VendorPassword ",vendorList[i].password);
            
            if (vendorList[i].password === password) {
                console.log("Inside the Acctive Vendor Objet");
                let loggedInVendor = {
                    
                    name : vendorList[i].first_Name,
                    id:vendorList[i].vendor_Id,
                    // name: vendorList[i].name || username
                };
                localStorage.setItem("loggedInVendor", JSON.stringify(loggedInVendor));

                console.log("Stored:", localStorage.getItem("loggedInUser"));
                
                // add a 1-second delay before redirect
                setTimeout(() => {
                    window.location.href = "/html/Vendor/Vendor_Dashboard_Panel.html";
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
window.handle_Vendor_Registeration = handle_Vendor_Registeration;
window.handle_Vendor_Login = handle_Vendor_Login;