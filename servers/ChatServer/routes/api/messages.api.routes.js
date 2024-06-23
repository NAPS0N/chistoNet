const messageRouter = require('express').Router();

const { Chat } = require('../../../db/models');

messageRouter.get('/', async (req, res) => {
  try {
    const chatMessages = await Chat.findAll({
      order: [['id', 'ASC']],
    });
    res.json({ chatMessages, message: 'OK' });
  } catch (error) {
    res.status(500).send({ error, message: 'Внутренняя ошибка сервера' });
  }
});

messageRouter.post('/', async (req, res) => {
  try {
    const chatMessage = await Chat.create(req.body);
    res.json({ chatMessage });
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
