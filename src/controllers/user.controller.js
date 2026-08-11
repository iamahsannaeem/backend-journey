const createUser = (req, res) => {
  const { name } = req.body;

  res.status(201).json({
    message: "User created successfully",
    name,
  });
};

const getAllUsers = (req, res) => {
  res.status(200).json({ message: "Users route" });
};

module.exports = { createUser, getAllUsers };
