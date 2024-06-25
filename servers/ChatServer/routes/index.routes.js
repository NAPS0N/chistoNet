const router = require('express').Router();

router.use('/', require('./api/messages.api.routes'));

module.exports = router;
