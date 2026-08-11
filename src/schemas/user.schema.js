const { z } = require("zod");

const userSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(100, {
      message: "Name must be at most 100 characters long",
    }),
  email: z.string().trim().email({
    message: "Invalid email format",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(100, {
      message: "Password must be at most 100 characters long",
    }),
});

module.exports = { userSchema };
