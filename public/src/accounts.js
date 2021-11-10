function findAccountById(accounts, id) {
  // return the account for each id
  let acc = accounts.filter(account => account.id === id);
  return acc[0];
}

function sortAccountsByLastName(accounts) {
  // Sorts all accounts by last name first
  return accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  // how many times an account has borrowed books

  const count = books.reduce((acc, book) => {
    book.borrows.forEach(checkedOut => {
      if (checkedOut.id === account.id) {
        acc++
      }
    })
    return acc
  }, 0)
  return count
}

function getBooksPossessedByAccount(account, books, authors) {
  // gives book info and author info through an array
  let result = [];

  books.forEach(book => {
    if (!book.borrows[0].returned && book.borrows[0].id === account.id) {
      book.author = authors.find(author => author.id === book.authorId)
      result.push(book)
    }
  });
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
