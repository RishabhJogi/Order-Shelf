// Import the other JS f
import { perosnal_recommendation_product } from "./Product%20Details/personalizeRecommendedBookList.js";

import { newArrivalBooks } from "./Product%20Details/newArrivalBookList.js";

import {bestsellersProducts} from "./Product%20Details/bestSellersList.js";
import { authors_list } from "./Product%20Details/auhtor.js";


console.log("bestsellers: ",bestsellersProducts);


const authorsDiv = document.getElementById("authors_card_div");

authorsDiv.innerHTML = authors_list
  .map((author) => {
    return `
      <div class="author-card d-flex flex-column align-items-center p-3 m-2"
           style="width: 200px; border-radius: 15px; background: #ffffff20; backdrop-filter: blur(10px);">
        
        <img src="${author.image}" alt="${author.name}"
             style="width:120px; height:120px; border-radius:50%; object-fit:cover;">

        <h4 class="mt-3">${author.name}</h4>
        <p style="font-size: 16px; color: #6f6f6f;">${author.famous_for}</p>
        <p style="font-size: 13px; color: #888;">Books: ${author.books_written}</p>
      </div>
    `;
  })
  .join("");


// // fetching and setting up the data for new arrivals book

document.getElementById("new_arrivals_book_div").innerHTML =
newArrivalBooks.map((item) => {
    let data = item.product_details;

    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">

        <div class="book-card">

            <div class="book-like">❤️</div>

            <img src="${data.product_image}" class="book-img" alt="${data.product_name}">

            <h4 class="book-title">${data.product_name}</h4>

            <p class="book-desc">${data.product_description}</p>

            <div class="price-buy-box">
                <span class="price-text">₹${data.product_price}</span>
                <button class="buy-btn">Buy</button>
            </div>

        </div>

    </div>`;
}).join("");



// // fetching and setting up the data for best sellers book



document.getElementById("bestsellers_book_div").innerHTML =
bestsellersProducts.map((item) => {
    let data = item.products_details;

    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">

        <div class="book-card">

            <div class="book-like">❤️</div>

            <img src="${data.product_image}" class="book-img" alt="${data.product_name}">

            <h4 class="book-title">${data.product_name}</h4>

            <p class="book-desc">
                ${data.product_description}
            </p>

            <div class="price-buy-box">
                <span class="price-text">₹${data.product_price}</span>
                <button class="buy-btn">Buy</button>
            </div>

        </div>

    </div>
    `;
}).join("");


// fetching and setting up the data for personalize book recommendation

// ---------------- PERSONALIZED RECOMMENDATIONS ----------------
document.getElementById("personalize_recommendation_book_div").innerHTML =
perosnal_recommendation_product.map((item) => {
    let data = item.product_details;

    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">

        <div class="book-card">

            <div class="book-like">❤️</div>

            <img src="${data.product_image}" class="book-img" alt="${data.product_name}">

            <h4 class="book-title">${data.product_name}</h4>

            <p class="book-desc">${data.product_description}</p>

            <div class="price-buy-box">
                <span class="price-text">₹${data.product_price}</span>
                <button class="buy-btn">Buy</button>
            </div>

        </div>

    </div>`;
}).join("");
