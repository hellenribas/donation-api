const mongoose = require("../services/loginService");
const productService = require("../services/productService");

const createProductController = async (req, res) => {
  const { productName, image, category } = req.body;
  const product = await productService.createProductService({
    productName,
    image,
    category,
  });
  if (!product) {
    throw new Error("ProductNotCreated");
  }
  return res.status(200).json(product);
};

const getProductController = async (req, res) => {
  try {
    const products = await productService.getProductService();
    return res.status(200).json(products);
  } catch (e) {
    throw new Error(e.message);
  }
};

const getProductsByCategoryController = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await productService.getProductsByCategoryService(
      category
    );
    return res.status(200).json(products);
  } catch (e) {
    throw new Error(e.message);
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.deleteProductService(id);
    return res.status(200).json(product);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  createProductController,
  getProductController,
  deleteProductController,
  getProductsByCategoryController,
};
