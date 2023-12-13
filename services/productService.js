const ProductModel = require("../models/ProductSchema");

const createProductService = async (data) => {
  const doc = await ProductModel.create({ ...data });
  return doc;
};

const getProductService = async () => {
  const doc = await ProductModel.find();
  return doc;
};

const getProductsByCategoryService = async (category) => {
  const doc = await ProductModel.find({ category });
  return doc;
};

const deleteProductService = async (id) => {
  const doc = await ProductModel.deleteOne({ _id: id });
  return doc;
};

module.exports = {
  createProductService,
  getProductService,
  deleteProductService,
  getProductsByCategoryService,
};
