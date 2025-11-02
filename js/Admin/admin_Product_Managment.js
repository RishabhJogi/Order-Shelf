// List Of Added Books
let added_Book_List = JSON.parse(localStorage.getItem("admin_Added_Book_List")) || [];
let admin_Added_Book_imageURL = '';
let editIndex = null;

// Handle image upload
function handle_Admin_Added_ImageChange(event) {
    const file = event.target.files[0];
    if (file) {
        admin_Added_Book_imageURL = URL.createObjectURL(file);
        console.log("Admin added Image Url: ", admin_Added_Book_imageURL);
    } else {
        console.log("No files are present !!");
    }
}

//   Save New Book

function handle_SaveBook() {
    const book_Name = document.getElementById("book-name").value;
    const book_Description = document.getElementById("book-description").value;
    const book_Price = document.getElementById("book-Price").value;
    const book_jonours = document.getElementById("book_Jonours").value;
    const book_Category = document.getElementById("book_Category").value;
    const currentDate = new Date().toLocaleString();

    let bookData = {
        name: book_Name,
        description: book_Description,
        Price: book_Price,
        jonours: book_jonours,
        Category: book_Category,
        date: currentDate,
        ImageUrl: admin_Added_Book_imageURL,
    };

    added_Book_List.push(bookData);


    localStorage.setItem("admin_Added_Book_List", JSON.stringify(added_Book_List));
    renderData();

    // Reset fields
    document.getElementById("book-name").value = '';
    document.getElementById("book-description").value = '';
    document.getElementById("book_Category").value = '';
    document.getElementById("book-Price").value = '';
    document.getElementById("book_Jonours").value = '';
    admin_Added_Book_imageURL = '';

    // Close modal (if using Bootstrap)
    const modal = bootstrap.Modal.getInstance(document.getElementById('addBookModal'));
    modal.hide();
}

// Render books in cards
function renderData() {
    document.getElementById("productGrid").innerHTML = added_Book_List.map((item, index) => {
        return `
        <div class="col-md-4 col-lg-3 border mx-2 my-2">
            <div class="product-card p-3 shadow-sm rounded">
                <img src="${item.ImageUrl} class="book-img w-100 rounded-4" alt="${item.name}"" class="img-fluid rounded mb-2" alt="">
                <div class="d-flex justify-content-between align-items-center">
                 <h6 class="mb-0">${item.name}</h6>
                 <small class="">${item.date}</small>
                </div>
                <p class="small text-muted mb-1">${item.description}</p>
                
                <div class="d-flex justify-content-between small">
                    <span>Genre: ${item.jonours}</span>
                    <span>Category: ${item.Category}</span>
                </div>
                <div class="mt-2 small d-flex justify-content-between">
                    <span class="  badge bg-light text-success  border">₹${item.Price}</span>
                    <span class="badge bg-success mb-2">Active</span>
                </div>

                <div class="mt-3 d-flex justify-content-between">
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                        data-bs-target="#updateBookModal" onclick="update_Book(${index})">
                        Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="remove_Book(${index})">
                        <i class="bi bi-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>`;
    }).join("");
}

// Delete book
function remove_Book(index) {
    if (confirm("Are you sure you want to delete this book?")) {
        added_Book_List.splice(index, 1);
        localStorage.setItem("admin_Added_Book_List", JSON.stringify(added_Book_List));
        renderData();
    }
}



// Save Updted book
function handle_SaveUpdates() {

    // let updated_Book = added_Book_List[editIndex];
    const updated_Book_Name = document.getElementById("updated-book-name").value;
    const updated_Book_Description = document.getElementById("updated-book-description").value;
    const updated_Book_Price = document.getElementById("updated-book-Price").value;
    const updated_Book_jonours = document.getElementById("updated-book_Jonours").value;

    const updated_Book_Category = document.getElementById("updated-book_Category").value;

    const updated_bookData = {
        name: updated_Book_Name,
        description: updated_Book_Description,
        Price: updated_Book_Price,
        jonours: updated_Book_jonours,
        Category: updated_Book_Category,
        ImageUrl: admin_Added_Book_imageURL,
    };

    added_Book_List[editIndex] = updated_bookData;
    // document.getElementById("saveButton").innerText = "Save Book";
    // Add new book
    // added_Book_List.push(updated_bookData);

    console.log("Updated Book is : ", added_Book_List[editIndex]);


    localStorage.setItem("admin_Added_Book_List", JSON.stringify(added_Book_List));

    renderData();


    // Reset fields
    editIndex = null;
    document.getElementById("updated-book-name").value = '';
    document.getElementById("updated-book-description").value = '';
    document.getElementById("updated-book_Category").value = '';
    document.getElementById("updated-book-Price").value = '';
    document.getElementById("updated-book_Jonours").value = '';
    admin_Added_Book_imageURL = '';

    // Close modal (if using Bootstrap)
    const modal = bootstrap.Modal.getInstance(document.getElementById('updateBookModal'));
    modal.hide();

}
// Updated book
function update_Book(index) {
    const book = added_Book_List[index];
    document.getElementById("updated-book-name").value = book.name;
    document.getElementById("updated-book-description").value = book.description;
    document.getElementById("updated-book_Category").value = book.Category;
    document.getElementById("updated-book-Price").value = book.Price;
    document.getElementById("updated-book_Jonours").value = book.jonours;
    // admin_Added_Book_imageURL = book.ImageUrl;

    editIndex = index;
    // document.getElementById("saveButton").innerText = "Update Book";

}
