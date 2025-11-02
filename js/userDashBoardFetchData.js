
let cart_item = JSON.parse(localStorage.getItem("cart_item")) || [];
function getCartCount(cart_item) {
    console.log(cart_item.length);
    document.getElementById("item-num-span").innerText = cart_item.length

}

function handleAddItemToCart(item) {
    console.log("Inside the Add t0 cart Fucntion");

    cart_item.push(item);
    localStorage.setItem("cart_item", JSON.stringify(cart_item));
    alert(`${item.products_details.product_name} added to cart!`);
    getCartCount(cart_item);

}
getCartCount(cart_item)

// Retrieve data from localStorage
const storedBooks = JSON.parse(localStorage.getItem("bestsellersbook")) || [];

// Bets sellers Book
Bestsellers.innerHTML = storedBooks.map((item) => {
    return `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
  <div class="card shadow-lg h-100">
  <img src="${item.wishlistURL}" class="card-img-top" alt="${item.title}">
  <div class="card-body text-center">
  <h5 class="card-title">${item.bookname}</h5>
  <p class="card-text">${item.bookdesc}</p>
  <p class="fw-bold text-success">₹${item.price}</p>
   <button class="add-to-cart-btn btn btn-primary" onclick='handleAddItemToCart(${JSON.stringify(item)})'>Add to Cart</button>
  </div>
  </div>
  </div>
  `;
}).join('');




// Wish List Book

const wishListBook = JSON.parse(localStorage.getItem("WishListBook")) || [];

console.log("wishList Book", wishListBook);
document.getElementById("WishListBooks").innerHTML = wishListBook.map((item) => {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card shadow-lg h-100">
        <img src="${item.wishlistURL}" class="card-img-top" alt="${item.title}">
        <div class="card-body text-center">
          <h5 class="card-title">${item.bookname}</h5>
          <p class="card-text">${item.bookdesc}</p>
          <p class="fw-bold text-success">₹${item.price}</p>
            <button class="add-to-cart-btn btn btn-primary btn btn-primary" onclick='handleAddItemToCart(${JSON.stringify(item)})'>Add to Cart</button>
        </div>
      </div>
    </div>
  `; return `

  `
}).join("");

// Highly Order books
const highlyOrderBooks = JSON.parse(localStorage.getItem("higlyOrdersBook")) || [];

console.log("highlyOrderbooks ; ", highlyOrderBooks);
document.getElementById("highlyOrderbooks").innerHTML = highlyOrderBooks.map((item) => {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card shadow-lg h-100">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body text-center">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <p class="fw-bold text-success">₹${item.price}</p>
         <button class="add-to-cart-btn btn btn-primary" onclick='handleAddItemToCart(${JSON.stringify(item)})'>Add to Cart</button>
        </div>
      </div>
    </div>
  `; return `

  `
}).join("");

// Audio Books
const StoredAudioBooks = JSON.parse(localStorage.getItem("audioBook")) || [];

console.log("audioBook ; ", StoredAudioBooks);
document.getElementById("Audiobooks").innerHTML = StoredAudioBooks.map((item) => {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card shadow-lg h-100">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body text-center">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <p class="fw-bold text-success">₹${item.price}</p>
           <button class="add-to-cart-btn btn btn-primary" onclick='handleAddItemToCart(${JSON.stringify(item)})'>Add to Cart</button>
        </div>
      </div>
    </div>
  `; return `

  `
}).join("");
window.handleAddItemToCart = handleAddItemToCart;