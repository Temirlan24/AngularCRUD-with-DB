const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const bookController = require("../controllers/book");

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getById);
router.post("/", bodyParser.json(), bookController.postBook);
router.put("/:id", bodyParser.json(), bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
