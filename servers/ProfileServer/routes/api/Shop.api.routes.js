const router = require("express").Router();
const verifyAccessToken = require("../../../middleware/verifyAccessToken");
const { Shop } = require("../../../db/models");


router.get("/", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const shop = await Shop.findOne({ where: { userId: user.id } });
    res.status(200).json({ message: "OK", shop });
  } catch (error) {
    console.log("error on Profile server, shop.api.routes: ", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

