const express = require("express");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use("/api/users", userRouter);

app.use("/api/posts", postRouter);

module.exports = app;
