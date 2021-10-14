function findAuthorById(authors, id) {
 let found = authors.find((author) => author.id === id);
 return found;
}

function findBookById(books, id) {
  let foundBooks = books.find((book) => book.id === id);
  return foundBooks;
 }

 function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
   book.borrows.every((borrow) => borrow.returned === true)
  );

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
