const router = require('express').Router();
const verifyAccessToken = require('../../../middleware/verifyAccessToken');
const { Shop } = require('../../../db/models');

router.get('/', verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const shop = await Shop.findOne({ where: { userId: user.id } });
    res.status(200).json({ message: 'OK', shop });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/user', verifyAccessToken, async (req, res) => {
  try {
    const { photo, labelName,  address, description, phoneNumber } = req.body;
    const { user } = res.locals;
    let shop = await Shop.findOne({ where: { userId: user.id } });
    if (shop) {
      shop = await shop.update({
        userId: user.id,
        labelName,
        logo: shop.logo,
        address,
        photo,
        description,
        lax: shop.shop,
        lon: shop.lon,
        phoneNumber,
      });
      res.status(200).send({ message: 'OK', shop });
    } else {
      res.status(400).json({ message: 'Такого магазина не существует' });
    }

    res.status(200).json({ message: 'OK', shop });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/create',verifyAccessToken, async (req,res) => {
  try {
    const { photo, labelName, address, logo, description, phoneNumber } = req.body;
    const { user } = res.locals;
    let shop = await Shop.findOne({ where: { userId: user.id } });

    if (!shop) {
      
      shop = await Shop.create({
        userId: user.id,
        labelName,
        logo,
        address,
        photo,
        description,
        lax: '59.938784',
        lon: '30.314997',
        phoneNumber,
      });
      res.status(200).json({message: 'OK', shop })
    } else {
      res.status(400).json({message: 'Такой магазин уже существует' })
    }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
})

module.exports = router;
