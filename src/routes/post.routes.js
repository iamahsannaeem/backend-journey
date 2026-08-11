const express = require("express");
const validatePost = require("../middlewares/validatePost");
const {
  createPost,
  getPostById,
  deletePost,
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/", validatePost, createPost);

router.get("/:id", getPostById);

router.delete("/:id", deletePost);

module.exports = router;
