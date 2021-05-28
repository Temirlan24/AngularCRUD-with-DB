const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const authorsController = require("../controllers/author");

router.get("/", authorsController.getAuthors);
router.get("/:id", authorsController.getById);
router.post("/", bodyParser.json(), authorsController.postAuthor);
router.put("/:id", bodyParser.json(), authorsController.updateAuthor);
router.delete("/:id", authorsController.deleteAuthor);

module.exports = router;
