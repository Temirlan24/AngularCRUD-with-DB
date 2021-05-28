const db = require("../util/database");

module.exports = class Product {
  constructor(productName, quantity, price) {
    this.productName = productName;
    this.quantity = quantity;
    this.price = price;
    this.total = quantity * price;
  }

  static find(id) {
    return db.query("SELECT * FROM product WHERE id = ?", [id]);
  }

  static getAll() {
    return db.query("SELECT * FROM product");
  }

  static postProduct(product) {
    return db.execute(
      "INSERT INTO product (productName, quantity, price, total) values(?,?,?,?)",
      [
        product.productName,
        product.quantity,
        product.price,
        product.quantity * product.price,
      ]
    );
  }
  static deleteProduct(id) {
    return db.query("delete from product where id = ?", [id]);
  }
  static updateProduct(newProduct, id) {
    return db.query(
      "update product set productName = ?, quantity = ?, price = ?, total = ? where id = ?",
      [
        newProduct.productName,
        newProduct.quantity,
        newProduct.price,
        newProduct.quantity * newProduct.price,
        id,
      ]
    );
  }
};
