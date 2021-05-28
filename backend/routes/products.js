const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const productController = require("../controllers/product");

router.get("/", productController.getProducts);
router.get("/:id", productController.getById);
router.post("/", bodyParser.json(), productController.postProduct);
router.put("/:id", bodyParser.json(), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
