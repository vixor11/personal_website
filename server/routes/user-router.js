const express = require("express");

const UserCtrl = require("../controllers/user-ctrl");

const router = express.Router();

router.post("/login", UserCtrl.logUserIn);
router.post("/checkLoggedIn", UserCtrl.checkLoggedIn);

module.exports = router;
