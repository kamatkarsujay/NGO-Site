const express = require("express");
const {
  addChild,
  getChildDetail,
  getAllChild,
  getAllChildren,
  getSingleChild,
  deleteChild,
  addSchemes,
  getAllChildrenAdmin,
  updateChild,
} = require("../controllers/childController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/addChild").post(isAuthenticatedUser, addChild);
router.route("/child/:id").get(isAuthenticatedUser, getChildDetail);
router.route("/children").get(isAuthenticatedUser, getAllChildren);
router.route("/updateChild/:id").put(isAuthenticatedUser, updateChild);

router
  .route("/admin/children")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllChildrenAdmin);
router
  .route("/admin/child/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleChild)
  .put(isAuthenticatedUser, authorizeRoles("admin"), addSchemes)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteChild);

module.exports = router;
