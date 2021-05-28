const Product = require("../models/product");

exports.getProducts = async (req, res, next) => {
  const product = await Product.getAll();
  res.json(product[0]);
};

exports.getById = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.find(id);
  res.json(product[0]);
};
exports.postProduct = async (req, res, next) => {
  const productName = req.body.productName;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const total = price * quantity;
  try {
    const product = {
      productName: productName,
      quantity: quantity,
      price: price,
      total: price * quantity,
    };
    const products = await Product.postProduct(product);
    res.status(201).json({ message: "Posted" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.deleteProduct(id);
    res.status(200).json(product);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  const productName = req.body.productName;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const total = price * quantity;
  const id = req.body.id;
  try {
    const product = {
      productName: productName,
      quantity: quantity,
      price: price,
      total: price * quantity,
    };
    const products = await Product.updateProduct(product, id);
    res.status(201).json({ message: "Updated" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
