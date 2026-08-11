const { userSchema } = require("../schemas/user.schema");

const validateUser = (req, res, next) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "Invalid user data",
      errors: result.error.issues,
    });
  }
  req.body = result.data;
  next();
};

module.exports = validateUser;
