const router = require("express").Router();
const verifyAccessToken = require("../../../middleware/verifyAccessToken");
const { Shop } = require("../../../db/models");
const upload = multer({ dest: 'upload/' })


router.get("/", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const shop = await Shop.findOne({ where: { userId: user.id } });
    res.status(200).json({ message: "OK", shop });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/user', verifyAccessToken, upload, async (req,res)=> {


  try {
    



  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

module.exports = router;

