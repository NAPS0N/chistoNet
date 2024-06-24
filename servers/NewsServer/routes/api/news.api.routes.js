const router = require("express").Router();
const verifyRefreshToken = require("../../middleware/verifyRefreshToken");
const { News } = require("../../../db/models");

//добавить verifyRefreshToken
router.get("/", async (req, res) => {
  try {
    const allNews = await News.findAll({
      order: [["createdAt", "DESC"]], // Сортировка по дате добавления в порядке убывания
    });

    res.status(200).json({ message: "OK", allNews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// достать по id
router.get("/:id", async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (news) {
      res.json(news);
    } else {
      res.status(404).send({ message: "Категория не найдена" });
    }
  } catch (error) {
    res.status(500).send({ error, message: "Внутренняя ошибка сервера" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newNews = await News.create(req.body);
    res.json({ newNews });
  } catch (error) {
    res.status(500).send({ error, message: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const upNews = await News.findByPk(req.params.id);
    if (upNews) {
      await upNews.update(req.body);
      res.json({ upNews });
    } else {
      res.status(404).send({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).send({ error, message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const delNews = await News.findByPk(req.params.id);
    if (delNews) {
      const result = await delNews.destroy();
      res.json({ result, message: "Category deleted" });
    } else {
      res.status(404).send({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).send({ error, message: "Internal server error" });
  }
});

module.exports = router;
