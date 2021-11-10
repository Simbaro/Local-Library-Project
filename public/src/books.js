function findAuthorById(authors, id) {
  let auth = authors.filter(author => author.id === id);
  return auth[0]
}

function findBookById(books, id) {
  let bookCase = books.filter(book => book.id === id);
  return bookCase[0]
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOutArrays = books.filter(book => book.borrows[0].returned === false)
  let returnedArray = books.filter(book => book.borrows[0].returned === true)

  return [checkedOutArrays, returnedArray];
}

function getBorrowersForBook(book, accounts) {
  let borrowHistory = [];

  for (let i = 0; i < book.borrows.length && i < 10; i++) {
    borrowHistory.push(book.borrows[i])
  }

  borrowHistory = borrowHistory.map((checkout) => {
    let acc = accounts.find((account) => account.id === checkout.id);
    acc.returned = checkout.returned;
    return acc
  })
  return borrowHistory
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
