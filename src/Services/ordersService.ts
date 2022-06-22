import IOrders from '../interface/intarfaceOrders';
import IProducts from '../interface/interfaceProduct';
import ordersModel from '../models/ordersModel';
import productsModel from '../models/productsModel';

const getOrders = async () => {
  const ordersData = await ordersModel.getOrders();
  // ordersData = ordersData.map((list) => Object.assign(list, { productsIds: [list.productsIds] }));
  const productsId = await Promise.all(ordersData.map(async (order: IOrders) => {
    const productsFromOrderId = await productsModel.productsForOrders(order.id);
    const productId = productsFromOrderId.map((product: IProducts) => product.id);
    const objectOrder = {
      id: order.id,
      userId: order.userId,
      productsIds: productId,
    };
    return objectOrder;
  }));

  return productsId;
};

export default {
  getOrders,
};