const { postSchema } = require("../schemas/post.schema");

const validatePost = (req, res, next) => {
  const result = postSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "Invalid post data",
      errors: result.error.issues,
    });
  }
  req.body = result.data;
  next();
};

module.exports = validatePost;
