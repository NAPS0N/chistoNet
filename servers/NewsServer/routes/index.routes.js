// const verifyRefreshToken = require("../middleware/verifyRefreshToken");
// const checkAdminPermission = require("../middleware/checkAdminPermission")

const router = require("express").Router();

/**
 * Auth and tokens routes
 */

router.use("/tokens", require("./api/tokens.api.routes"));
router.use("/", require("./api/news.api.routes"));
/**
 * API routes
 */

// router.use("/admin", verifyRefreshToken, checkAdminPermission,  require("./api/admin/admin.api.routes"));

module.exports = router;
