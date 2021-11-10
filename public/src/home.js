function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let counter = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      counter++
    }
  }
  return counter
}

function sortnSplice(arr) {
  arr.sort((a, b) => b.count - a.count)
  return arr.splice(0, 5)
}

function getMostCommonGenres(books) {
  let result = {};

  let genre = books.forEach((book) => {
    if (result[book.genre] == null) {
      result[book.genre] = 1;
    } else {
      result[book.genre] += 1;
    }
  })

  let countArray = [];

  for (const [key, value] of Object.entries(result)) {
    countArray.push({
      'name': key,
      'count': value
    })
  }

  return sortnSplice(countArray)
}

function getMostPopularBooks(books) {
  let answer = [];

  books.forEach(book => {
    let booked = {};
    const { 'name': name, 'count': count } = booked
    booked.name = book.title
    booked.count = book.borrows.length
    answer.push(booked);
  });

  return sortnSplice(answer)
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };

    books.forEach((book) => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length
      }
    })

    result.push(theAuthor)
  })

  return sortnSplice(result)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
