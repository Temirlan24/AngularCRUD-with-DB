const db = require("../util/database");

module.exports = class Author {
  constructor(firstName, lastName, bornYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bornYear = bornYear;
  }

  static find(id) {
    return db.query("SELECT * FROM authors WHERE authorId = ?", [id]);
  }

  static getAll() {
    return db.query("SELECT * FROM authors");
  }

  static postAuthor(author) {
    return db.execute(
      "INSERT INTO authors (firstName, lastName, bornYear) values(?,?,?)",
      [author.firstName, author.lastName, author.bornYear]
    );
  }
  static deleteAuthor(id) {
    return db.query("delete from authors where authorId = ?", [id]);
  }
  static update(newAuthor, id) {
    return db.query(
      "update books set firstName = ?, lastName = ?, bornYear = ? where authorId = ?",
      [newAuthor.firstName, newAuthor.lastName, newAuthor.bornYear, id]
    );
  }
};
