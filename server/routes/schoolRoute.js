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

router.route("/admin/addSchool").post(authorizeRoles("admin"), addSchool);
router.route("/admin/schools").get(authorizeRoles("admin"), getAllSchools);
router
  .route("/admin/school/:id")
  .get(authorizeRoles("admin"), getSchool)
  .put(authorizeRoles("admin"), updateSchool)
  .delete(authorizeRoles("admin"), deleteSchool);

module.exports = router;
