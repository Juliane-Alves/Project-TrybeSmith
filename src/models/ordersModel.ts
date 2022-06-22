import connection from './connection';
import IOrders from '../interface/intarfaceOrders';

const getOrders = async () => {
// const [orders] = await connection.execute(`
  //   SELECT
  //     Or.id,
  //     Or.userId,
  //     Pro.id as productsIds
  //   FROM
  //     Trybesmith.Orders as Or
  //   JOIN
  //     Trybesmith.Products as Pro 
  //   ON
  //     Or.id = Pro.orderId;
  //   `); // o id se encontra na tabela de produtos

  const [orders] = await connection.execute('SELECT * FROM Trybesmith.Orders');
  return orders as IOrders[];
};

export default {
  getOrders,
};