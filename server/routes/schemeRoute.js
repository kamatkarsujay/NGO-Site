const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  addScheme,
  getAllSchemes,
  getScheme,
  updateScheme,
  deleteScheme,
} = require("../controllers/schemeController");

const router = express.Router();

router
  .route("/admin/addScheme")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addScheme);
router
  .route("/admin/schemes")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllSchemes);
router
  .route("/admin/scheme/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getScheme)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateScheme)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteScheme);

module.exports = router;
