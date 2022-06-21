// eslint-disable-next-line import/no-import-module-exports
import connection from './connection';
import IProducts from '../interface/interfaceProduct';

const getAllProducts = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [productsList] = await connection.execute(query);
  
  return productsList as IProducts[];
};

export default {
  getAllProducts,
};