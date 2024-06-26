// const verifyRefreshToken = require("../middleware/verifyRefreshToken");
// const checkAdminPermission = require("../middleware/checkAdminPermission")

const router = require("express").Router();

/**
 * Auth and tokens routes
 */
router.use("/auth", require("./api/auth.api.routes"));
router.use("/token", require("./api/tokens.api.routes"));
/**
 * API routes
 */

// router.use("/admin", verifyRefreshToken, checkAdminPermission,  require("./api/admin/admin.api.routes"));

module.exports = router;
