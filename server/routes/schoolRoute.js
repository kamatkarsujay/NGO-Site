const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  addSchool,
  getSchool,
  updateSchool,
  deleteSchool,
  getAllSchools,
} = require("../controllers/schoolController");

const router = express.Router();

router
  .route("/admin/addSchool")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addSchool);
router
  .route("/admin/schools")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllSchools);
router
  .route("/admin/school/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSchool)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateSchool)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteSchool);

module.exports = router;
