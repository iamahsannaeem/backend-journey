const posts = [
  {
    id: 1,
    title: "Learning Express",
    content: "This is my first post",
    author: "Ahsan",
  },
  {
    id: 2,
    title: "Learning Node",
    content: "This is my second post",
    author: "Ahsan",
  },
];

const createPost = (req, res) => {
  const { title, content, author } = req.body;
  res.status(201).json({
    message: "Post created successfully",
    title,
    content,
    author,
  });
};

const getPostById = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);
  console.log(post);
  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }
  res.status(200).json({
    post: post,
  });
};

const deletePost = (req, res) => {
  const id = Number(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    return res.status(404).json({
      message: "Post not found",
    });
  }
  posts.splice(postIndex, 1);
  return res.status(200).json({
    message: "Post deleted successfully",
  });
};

const updatePost = (req, res) => {
  const id = Number(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);
};

module.exports = { createPost, getPostById, deletePost, updatePost };
