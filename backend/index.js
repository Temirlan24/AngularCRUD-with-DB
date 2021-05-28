const express = require("express");
const bodyParser = require("body-parser");
const books = require("./routes/books");
const products = require("./routes/products");
const authors = require("./routes/authors");
const errorController = require("./controllers/error");
const app = express();
const ports = process.env.PORT || 3000;
const cors = require("cors");
const { body } = require("express-validator");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, X-Custom-Header, Authorization"
  );
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});
app.use("/books", books);
app.use("/authors", authors);
app.use("/products", products);

app.use(errorController.get404);
app.use(errorController.get500);
app.listen(ports, () => console.log(`Listening on port ${ports}`));
