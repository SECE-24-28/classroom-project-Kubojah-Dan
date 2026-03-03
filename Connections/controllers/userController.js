import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const search = req.query.search || "";

    const users = await User.find({
      name: { $regex: search, $options: "i" }
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};
