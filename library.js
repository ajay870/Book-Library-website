// Sample book data for initial testing
const sampleBooks = [
    { title: "Book 1", author: "Author 1", category: "Fiction" },
    { title: "Book 2", author: "Author 2", category: "Non-Fiction" },
];

// Function to display books in the list
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    sampleBooks.forEach(book => {
        const li = document.createElement('li');
        li.className = 'book-item';
        li.textContent = `${book.title} by ${book.author} (${book.category})`;
        bookList.appendChild(li);
    });
}

// Function to add a new book
function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;

    if (title && author) {
        const newBook = { title, author, category };
        sampleBooks.push(newBook);
        displayBooks();
        // Clear the form fields after adding a book
        document.getElementById('book-form').reset();
    } else {
        alert('Title and Author are required!');
    }
}

// Display the initial list of books
displayBooks();
