import products from '../models/productsModel';

const getAllProducts = async () => {
  const allProducts = await products.getAllProducts();

  return allProducts;
};

const createProducts = async (name: string, amount: string) => {
  const newProducts = await products.createProducts(name, amount);

  return newProducts;
};

export default {
  getAllProducts,
  createProducts,
};