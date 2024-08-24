// Function to add a job
function addBook() {
    const bookTitle = document.getElementById('book-title').value;
    const bookPages = document.getElementById('book-pages').value;
    const bookPublisher = document.getElementById('book-publisher').value;
    const bookAuthor = document.getElementById('book-author').value;

    if (bookTitle && bookPages && bookPublisher && bookAuthor) {
        let books = getBooksFromStorage();
        books.push({ title: bookTitle, pages: bookPages, publisher: bookPublisher, author: bookAuthor });
        localStorage.setItem('books', JSON.stringify(books));
        document.getElementById('book-title').value = '';
        document.getElementById('book-pages').value = '';
        document.getElementById('book-publisher').value = '';
        document.getElementById('book-author').value = '';
    }
}

// Function to retrieve books from localStorage
function getBooksFromStorage() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
}
// Function to display jobs on the page
function displayBooks() {
    const empty=document.querySelector('.empty');
    const books = getBooksFromStorage();
    empty.innerHTML = '';

    books.forEach((book, index) => {
        let add_job=document.querySelector('.add-job');
        let job=document.createElement('div');
        job.classList.add('border');
        job.innerHTML = `
            Job Title: ${book.title}<br>
            Job Salary: ${book.pages}<br>
            Job Description: ${book.publisher}<br>
            Candidate Experience: ${book.author}<br>
        `;
        add_job.appendChild(job);
    });
}

// Function to remove a book from the list and update localStorage
