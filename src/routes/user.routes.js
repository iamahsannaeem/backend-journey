const express = require("express");

const router = express.Router();

const validateUser = require("../middlewares/validateUser");
const { createUser, getAllUsers } = require("../controllers/user.controller");

router.post("/", validateUser, createUser);
router.get("/", getAllUsers);

module.exports = router;
