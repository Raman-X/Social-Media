const express = require("express");
const { logout, login, signup } = require("../controllers/authController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
