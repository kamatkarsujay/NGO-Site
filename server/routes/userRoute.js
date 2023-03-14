const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  updatePassword,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(logout);

router.route("/me").get(getUserDetails);

router.route("/password/update").put(updatePassword);

router.route("/admin/users").get(authorizeRoles("admin"), getAllUser);

router
  .route("/admin/user/:id")
  .get(authorizeRoles("admin"), getSingleUser)
  .put(authorizeRoles("admin"), updateUserRole)
  .delete(authorizeRoles("admin"), deleteUser);

module.exports = router;
