import products from '../models/productsModel';

const getAllProducts = async () => {
  const allProducts = await products.getAllProducts();

  return allProducts;
};

export default {
  getAllProducts,
};