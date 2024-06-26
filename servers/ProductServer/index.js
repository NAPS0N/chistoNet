const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const morgan = require("morgan");
const http = require("http");
require("dotenv").config({ path: path.join("../.env") });

const app = express();

const verifyAccessToken = require("../middleware/verifyAccessToken");
const { Product, ProductImg, Category } = require("../db/models");
const { log } = require("console");

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev")); // логирует HTTP запросы
app.use(cookieParser()); // для чтения кук
app.use(express.urlencoded()); // для чтения данных из формы
app.use(express.json()); // для чтения JSON данных

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.findAll({ include: ProductImg });
    // const products = await Product.findAll();
    res.status(200).json({ message: "OK", products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/products/shop", verifyAccessToken, async (req, res) => {
  const { user } = res.locals;
  try {
    const shopProducts = await Product.findAll({
      where: { userId: user.id },
      include: ProductImg,
    });
    res.status(200).json({ message: "OK", shopProducts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// app.get('/api/products/user', verifyAccessToken, async (req, res) => {
//   const { user } = res.locals;
//     try {
//       const productsUser = await Product.findAll({where: {userId: user.id}})
//       res.status(200).json({message: 'OK', productsUser })
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   })

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id },
      include: { model: ProductImg },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findAll({
      where: { categoryId: id },
      include: { model: ProductImg },
    });
    res.status(200).json({ message: "OK", products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// app.get("/api/categories/:id", async (req, res) => {
//   const {id} = req.params;
//   try {
//     const categories = await Category.findAll({where: {pId: id}});
//     //const products = await Product.findAll();
//     res.status(200).json({ message: "OK", categories });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// app.get("/api/products/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await Product.findByPk(id, { include: ProductImg });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.post('/api/products/create',verifyAccessToken, async (req,res) => {
  try {
    const { title, price, description, categoryId, geo, ProductImgs } = req.body;
    const { user } = res.locals;
    let product = await Product.findOne({ where: { userId: user.id, title: title,categoryId: categoryId   }, }); 
    console.log();

    if (!product) {
     product = await Product.create({
        title,
        price,
        description,
        categoryId,
        geo,
        ProductImgs,
        userId: user.id,
     
      });
      res.status(200).json({message: 'OK', product })
    } else {
      res.status(400).json({message: 'Такой продукт уже существует' })
    }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
})


server.listen(process.env.PORTProduct, () => {
  console.log(`Example app listening on port ${process.env.PORTProduct}`);
});
