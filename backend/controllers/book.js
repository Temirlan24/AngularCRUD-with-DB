const Book = require("../models/book");

exports.getBooks = async (req, res, next) => {
  const books = await Book.getAll();
  res.json(books[0]);
};

exports.getById = async (req, res, next) => {
  const { id } = req.params;
  const books = await Book.find(id);
  res.json(books[0]);
};
exports.postBook = async (req, res, next) => {
  const bookName = req.body.bookName;
  const auhtorId = req.body.auhtorId;
  const price = req.body.price;
  try {
    const book = {
      bookName: bookName,
      auhtorId: auhtorId,
      price: price,
    };
    const books = await Book.postBook(book);
    res.status(201).json({ message: "Posted" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.deleteBook(id);
    res.status(200).json(books);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateBook = async (req, res, next) => {
  const bookName = req.body.bookName;
  const auhtorId = req.body.auhtorId;
  const price = req.body.price;
  const id = req.body.bookId;
  try {
    const book = {
      bookName: bookName,
      auhtorId: auhtorId,
      price: price,
    };
    const books = await Book.update(book, id);
    res.status(201).json({ message: "Updated" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
