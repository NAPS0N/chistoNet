const router = require("express").Router();
const verifyRefreshToken = require("../../../AuthServer/middleware/verifyRefreshToken");
const {Individual} = require("../../../db/models/");

//добавить verifyRefreshToken
router.get("/", verifyRefreshToken, async (req, res) => {
    try {
        const {user} =  res.locals;
      const individual = await Individual.findOne({where: {userId: user.id}  });
   
      res.status(200).json({ message: "OK", individual, user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;