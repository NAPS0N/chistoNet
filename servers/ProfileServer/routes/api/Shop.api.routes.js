const router = require("express").Router();
const verifyAccessToken = require("../../../middleware/verifyAccessToken");
const { Shop } = require('../../../db/models');

router.get("/",  async (req, res) => { // verifyAccessToken
    try {
        const {user} =  res.locals;

      const shop = await Shop.findOne({where: {userId: 1}  }); // изменить на user.id
   
      res.status(200).json({ message: "OK", shop });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;