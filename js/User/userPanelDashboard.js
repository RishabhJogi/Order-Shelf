
// const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"))
// console.log(userLoggedIn.name);

// document.getElementById("loggedInUsername").innerText = userLoggedIn.name;

let cart_item = JSON.parse(localStorage.getItem("cart_item")) || [];
function getCartCount(cart_item) {
  // console.log(cart_item.length);
  document.getElementById("item-num-span").innerText = cart_item.length

}

// Fetching Data from local Storage (LoginUser) 
const loggedInUserName = JSON.parse(localStorage.getItem("loggedInUser"));

document.getElementById("loggedInUsername").innerText = loggedInUserName.name;


function handleAddItemToCart(addedBooks) {
  // console.log("Inside the Add t0 cart Fucntion");

  cart_item.push(addedBooks);
  localStorage.setItem("cart_item", JSON.stringify(cart_item));
  alert(`${addedBooks.name} added to cart!`);
  getCartCount(cart_item);

}
getCartCount(cart_item)





// Mappin the Admin Added Book List Inot the User Dashboard

const admin_Added_Books_List = JSON.parse(localStorage.getItem("admin_Added_Book_List")) || [];
// console.log("user pannel dashboard data: ", admin_Added_Books_List);

// Best Sellers mapping

document.getElementById("Bestsellers").innerHTML = admin_Added_Books_List.map((addedBooks) => {
  return (
    `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
  <div class="book-card border-0 shadow-lg h-100 p-3 rounded-4 text-start">
    <div class="position-relative">
      <img src="${addedBooks.ImageUrl}" class="book-img w-100 rounded-4" alt="${addedBooks.name}">
      <button class="wishlist-btn position-absolute top-0 end-0 m-3 border-0 bg-white rounded-circle shadow-sm">
        <i class="bi bi-heart"></i>
      </button>
    </div>

    <div class="card-body px-2 mt-3">
      <h5 class="fw-bold text-dark">${addedBooks.name}</h5>

      <div class="mb-2">
        <span class="badge bg-light text-dark border me-1">${addedBooks.jonours || "N/A"}</span>
      
        <span class="badge bg-light text-dark border">${addedBooks.Category || "N/A"}</span>
      </div>

      <p class="text-muted small mb-4">${addedBooks.description}</p>

      <div class="d-flex justify-content-between align-items-center">
        <h5 class="fw-bold text-dark mb-0">₹${addedBooks.Price}</h5>
        <button class="btn btn-warning text-white fw-semibold px-3 py-2 rounded-pill border-0 d-flex align-items-center gap-2"
          onclick='handleAddItemToCart(${JSON.stringify(addedBooks)})'>
          <i class="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
`
  )

}).join("");

// WishList mapping

document.getElementById("WishListBooks").innerHTML = admin_Added_Books_List.map((addedBooks) => {
  return (
    `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
  <div class="book-card border-0 shadow-lg h-100 p-3 rounded-4 text-start">
    <div class="position-relative">
      <img src="${addedBooks.ImageUrl}" class="book-img w-100 rounded-4" alt="${addedBooks.name}">
      <button class="wishlist-btn position-absolute top-0 end-0 m-3 border-0 bg-white rounded-circle shadow-sm">
        <i class="bi bi-heart"></i>
      </button>
    </div>

    <div class="card-body px-2 mt-3">
      <h5 class="fw-bold text-dark">${addedBooks.name}</h5>

      <div class="mb-2">
        <span class="badge bg-light text-dark border me-1">${addedBooks.jonours || "N/A"}</span>
        <span class="badge bg-light text-dark border">${addedBooks.Category || "N/A"}</span>
      </div>

      <p class="text-muted small mb-4">${addedBooks.description}</p>

      <div class="d-flex justify-content-between align-items-center">
        <h5 class="fw-bold text-dark mb-0">₹${addedBooks.Price}</h5>
        <button class="btn btn-warning text-white fw-semibold px-3 py-2 rounded-pill border-0 d-flex align-items-center gap-2"
          onclick='handleAddItemToCart(${JSON.stringify(addedBooks)})'>
          <i class="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
`
  )

}).join("");


// Highly Order Book mapping

document.getElementById("highlyOrderbooks").innerHTML = admin_Added_Books_List.map((addedBooks) => {
  return (
    `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
  <div class="book-card border-0 shadow-lg h-100 p-3 rounded-4 text-start">
    <div class="position-relative">
      <img src="${addedBooks.ImageUrl}" class="book-img w-100 rounded-4" alt="${addedBooks.name}">
      <button class="wishlist-btn position-absolute top-0 end-0 m-3 border-0 bg-white rounded-circle shadow-sm">
        <i class="bi bi-heart"></i>
      </button>
    </div>

    <div class="card-body px-2 mt-3">
      <h5 class="fw-bold text-dark">${addedBooks.name}</h5>

      <div class="mb-2">
        <span class="badge bg-light text-dark border me-1">${addedBooks.jonours || "N/A"}</span>
        <span class="badge bg-light text-dark border">${addedBooks.Category || "N/A"}</span>
      </div>

      <p class="text-muted small mb-4">${addedBooks.description}</p>

      <div class="d-flex justify-content-between align-items-center">
        <h5 class="fw-bold text-dark mb-0">₹${addedBooks.Price}</h5>
        <button class="btn btn-warning text-white fw-semibold px-3 py-2 rounded-pill border-0 d-flex align-items-center gap-2"
          onclick='handleAddItemToCart(${JSON.stringify(addedBooks)})'>
          <i class="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
`
  )

}).join("");

// Audio Book mapping

document.getElementById("Audiobooks").innerHTML = admin_Added_Books_List.map((addedBooks) => {
  return (
    `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
  <div class="book-card border-0 shadow-lg h-100 p-3 rounded-4 text-start">
    <div class="position-relative">
      <img src="${addedBooks.ImageUrl}" class="book-img w-100 rounded-4" alt="${addedBooks.name}">
      <button class="wishlist-btn position-absolute top-0 end-0 m-3 border-0 bg-white rounded-circle shadow-sm">
        <i class="bi bi-heart"></i>
      </button>
    </div>

    <div class="card-body px-2 mt-3">
      <h5 class="fw-bold text-dark">${addedBooks.name}</h5>

      <div class="mb-2">
        <span class="badge bg-light text-dark border me-1">${addedBooks.jonours || "N/A"}</span>
        <span class="badge bg-light text-dark border">${addedBooks.Category || "N/A"}</span>
      </div>

      <p class="text-muted small mb-4">${addedBooks.description}</p>

      <div class="d-flex justify-content-between align-items-center">
        <h5 class="fw-bold text-dark mb-0">₹${addedBooks.Price}</h5>
        <button class="btn btn-warning text-white fw-semibold px-3 py-2 rounded-pill border-0 d-flex align-items-center gap-2"
          onclick='handleAddItemToCart(${JSON.stringify(addedBooks)})'>
          <i class="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
`
  )

}).join("");

window.handleAddItemToCart = handleAddItemToCart;