const { z } = require("zod");

const postSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, {
      message: "Title must be at least 5 characters long",
    })
    .max(100, {
      message: "Title must be at most 100 characters long",
    }),
  content: z
    .string()
    .trim()
    .min(10, {
      message: "Content must be at least 10 characters long",
    })
    .max(1000, {
      message: "Content must be at most 1000 characters long",
    }),
  author: z
    .string()
    .trim()
    .min(3, {
      message: "Author must be at least 3 characters long",
    })
    .max(50, {
      message: "Author must be at most 50 characters long",
    }),
});

module.exports = { postSchema };
