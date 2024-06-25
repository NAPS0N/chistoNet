// const verifyRefreshToken = require("../middleware/verifyRefreshToken");
// const checkAdminPermission = require("../middleware/checkAdminPermission")

const router = require("express").Router();

/**
 * Auth and tokens routes
 */

router.use('/', require('./api/profileIndividual.api.routes'));
router.use('/shop', require('./api/Shop.api.routes'));
/**
 * API routes
 */
 


module.exports = router;