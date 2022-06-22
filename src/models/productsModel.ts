// eslint-disable-next-line import/no-import-module-exports
import connection from './connection';
import IProducts from '../interface/interfaceProduct';

const getAllProducts = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [productsList] = await connection.execute(query);
  
  return productsList as IProducts[];
};

const createProducts = async (name: string, amount: string) => {
  const query = `
  INSERT INTO Trybesmith.Products (name, amount)
  VALUES (?, ?)`;

  const [result] = await connection.execute(query, [name, amount]);

  const { insertId } = JSON.parse(JSON.stringify(result)); // usando o parse e stringify como dica do readme

  const newProduct = {
    id: insertId,
    name,
    amount,
  };
  return newProduct as IProducts;
};

const productsForOrders = async (orderId: number) => {
  const query = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?';

  const [data] = await connection.execute(query, [orderId]);

  return data as IProducts[];
};

export default {
  getAllProducts,
  createProducts,
  productsForOrders,
};