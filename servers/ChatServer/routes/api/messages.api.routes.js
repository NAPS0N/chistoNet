const messageRouter = require('express').Router();
const verifyAccessToken = require('../../../middleware/verifyAccessToken');

const { Chat } = require('../../../db/models');

messageRouter.get('/', verifyAccessToken, async (req, res) => {
  try {
    const chatMessages = await Chat.findAll();

    res.json({ chatMessages, message: 'OK' });
  } catch (error) {
    res.status(500).send({ error, message: 'Внутренняя ошибка сервера' });
  }
});

messageRouter.post('/', verifyAccessToken, async (req, res) => {
  try {
    const newMessage = await Chat.create(req.body);

    res.json({ newMessage });
  } catch (error) {
    res.status(500).send({ error, message: 'Internal server error' });
  }
});

messageRouter.put('/:id', async (req, res) => {
  try {
    const chatMessage = await Chat.findByPk(req.params.id);
    if (chatMessage) {
      await Chat.update(req.body);
      res.json({ chatMessage });
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).send({ error, message: 'Internal server error' });
  }
});

messageRouter.delete('/:id', async (req, res) => {
  try {
    const chatMessage = await Chat.findByPk(req.params.id);
    if (chatMessage) {
      await chatMessage.destroy();
      res.json({ message: 'Product deleted' });
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).send({ error, message: 'Internal server error' });
  }
});

module.exports = messageRouter;
