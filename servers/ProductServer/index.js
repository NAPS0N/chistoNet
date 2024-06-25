const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const morgan = require("morgan");
const http = require("http");
require("dotenv").config();
const app = express();

const { Product, ProductImg } = require("../db/models");

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev")); // логирует HTTP запросы
app.use(cookieParser()); // для чтения кук
app.use(express.urlencoded()); // для чтения данных из формы
app.use(express.json()); // для чтения JSON данных

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.findAll({ include: ProductImg });
    //const products = await Product.findAll();
    res.status(200).json({ message: "OK", products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// app.get("/api/products/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await Product.findByPk(id, { include: ProductImg });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

server.listen(process.env.PORTProduct, () => {
  console.log(`Example app listening on port ${process.env.PORTProduct}`);
});
