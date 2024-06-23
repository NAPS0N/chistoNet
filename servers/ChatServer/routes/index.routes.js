const router = require('express').Router();

router.use('/chat/message', require('./api/messages.api.routes'));

module.exports = router;
