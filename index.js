// setting authors data
const authorsDataFromStorage = JSON.parse(localStorage.getItem("authors_data"));
document.getElementById("authors_card_div").innerHTML = authorsDataFromStorage.map((authorData, index) => {
    return (
        `
            <div class="author-card-div  ">
                <img src="./Assests/George Orwell.jpg" class="border p-2" alt="" height="150px" width="150px">
                <h3 class="text-center">George Orwell</h3>
            </div>    
        `
    )
})


// fetching and setting up the data for new arrivals book
const newArrivalBookFromStorage = JSON.parse(localStorage.getItem("new_arrival_book"))
document.getElementById("new_arrivals_book_div").innerHTML = newArrivalBookFromStorage.map((newArrivalBook, index) => {
    return (
        `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card shadow-sm border-0 rounded-4 overflow-hidden h-100">
                <img src="${item.product_details.product_image}" 
                    class="card-img-top img-fluid" 
                    alt="${item.product_details.product_name}">
  
                <div class="card-body text-center">
                    <h5 class="card-title fw-semibold">${item.product_details.product_name}</h5>
                    <p class="card-text text-muted small">
                        ${item.product_details.product_description}
                    </p>
            
                    <!-- 💰 Price Section -->
                    <p class="card-text fw-bold text-success">
                        ₹${item.product_details.product_price}
                    </p>
            
                    <a href="#" class="btn btn-primary w-100 rounded-pill">Add to Cart</a>
                </div>
            </div>
        </div>
        `
    )
}).join("");


// fetching and setting up the data for best sellers book
const bestSellerBookFromStorage = JSON.parse(localStorage.getItem("best_seller_book"))
document.getElementById("bestsellers_book_div").innerHTML = bestSellerBookFromStorage.map((bestSellerBook, index) => {
    return (
        `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card shadow-sm border-0 rounded-4 overflow-hidden h-100">
                <img src="${item.product_details.product_image}" 
                    class="card-img-top img-fluid" 
                    alt="${item.product_details.product_name}">
  
                <div class="card-body text-center">
                    <h5 class="card-title fw-semibold">${item.product_details.product_name}</h5>
                    <p class="card-text text-muted small">
                        ${item.product_details.product_description}
                    </p>
            
                    <!-- 💰 Price Section -->
                    <p class="card-text fw-bold text-success">
                        ₹${item.product_details.product_price}
                    </p>
            
                    <a href="#" class="btn btn-primary w-100 rounded-pill">Add to Cart</a>
                </div>
            </div>
        </div>
        `
    )
}).join("");


// fetching and setting up the data for personalize book recommendation
const personalizeRecommendBookFromStorage = JSON.parse(localStorage.getItem("personalize_recommend_book"))
document.getElementById("personalize_recommendation_book_div").innerHTML = personalizeRecommendBookFromStorage.map((personalizeBook, index) => {
    return (
        `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card shadow-sm border-0 rounded-4 overflow-hidden h-100">
                <img src="${item.product_details.product_image}" 
                    class="card-img-top img-fluid" 
                    alt="${item.product_details.product_name}">
  
                <div class="card-body text-center">
                    <h5 class="card-title fw-semibold">${item.product_details.product_name}</h5>
                    <p class="card-text text-muted small">
                        ${item.product_details.product_description}
                    </p>
            
                    <!-- 💰 Price Section -->
                    <p class="card-text fw-bold text-success">
                        ₹${item.product_details.product_price}
                    </p>
            
                    <a href="#" class="btn btn-primary w-100 rounded-pill">Add to Cart</a>
                </div>
            </div>
        </div>
        `
    )
}).join("");