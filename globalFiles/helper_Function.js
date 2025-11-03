 export function role_ID_Generate(userRole) {
    const prefix = "userRole"; // or "VENDOR", "ORDER", etc.
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
    const timestamp = Date.now(); // unique based on current time
    return `${prefix}-${timestamp}-${randomNum}`;
}