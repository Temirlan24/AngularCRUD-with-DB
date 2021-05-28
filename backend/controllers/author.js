const Author = require("../models/author");

exports.getAuthors = async (req, res, next) => {
  const authors = await Author.getAll();
  res.json(authors[0]);
};

exports.getById = async (req, res, next) => {
  const { id } = req.params;
  const authors = await Author.find(id);
  res.json(authors[0]);
};
exports.postAuthor = async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const bornYear = req.body.bornYear;
  try {
    const author = {
      firstName: firstName,
      lastName: lastName,
      bornYear: bornYear,
    };
    const authors = await Author.postAuthor(author);
    res.status(201).json({ message: "Posted" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const authors = await Author.deleteAuthor(id);
    res.status(200).json(authors);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateAuthor = async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const bornYear = req.body.bornYear;
  const authorId = req.body.authorId;
  try {
    const book = {
      firstName: firstName,
      lastName: lastName,
      bornYear: bornYear,
    };
    const authors = await Author.update(book, authorId);
    res.status(201).json({ message: "Updated" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
