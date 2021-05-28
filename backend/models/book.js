const db = require("../util/database");
const Author = require("./author");

module.exports = class Books {
  constructor(bookName, authorId, price) {
    this.bookName = bookName;
    this.authorId = Author;
    this.price = price;
  }

  static find(id) {
    return db.query("SELECT * FROM books WHERE bookId = ?", [id]);
  }

  static getAll() {
    return db.query("SELECT * FROM books");
  }

  static postBook(book) {
    return db.execute(
      "INSERT INTO books (bookName, authorId, price) values(?,?,?)",
      [book.bookName, book.authorId, book.price]
    );
  }
  static deleteBook(id) {
    return db.query("delete from books where bookId = ?", [id]);
  }
  static update(newBook, id) {
    return db.query(
      "update books set bookName = ?, authorId = ?, price = ? where bookId = ?",
      [newBook.bookName, newBook.authorId, newBook.price, id]
    );
  }
};
