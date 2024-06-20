const express = require("express");
const app = express();
const port = 4000;

const { Product, ProductImg } = require("../db/models");

app.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll({ include: ProductImg });
    //const products = await Product.findAll();
    res.status(200).json({ message: "OK", products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
