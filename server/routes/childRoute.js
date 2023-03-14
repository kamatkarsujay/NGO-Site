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

router.route("/addChild").post(addChild);
router.route("/child/:id").get(getChildDetail);
router.route("/children").get(getAllChildren);
router.route("/updateChild/:id").put(updateChild);

router
  .route("/admin/children")
  .get(authorizeRoles("admin"), getAllChildrenAdmin);
router
  .route("/admin/child/:id")
  .get(authorizeRoles("admin"), getSingleChild)
  .put(authorizeRoles("admin"), addSchemes)
  .delete(authorizeRoles("admin"), deleteChild);

module.exports = router;
