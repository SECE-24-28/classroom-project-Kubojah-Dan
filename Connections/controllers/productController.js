import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const search = req.query.search || "";

    const products = await Product.find({
      name: { $regex: search, $options: "i" }
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;

    const product = await Product.create({
      name,
      category,
      price,
      description,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};
