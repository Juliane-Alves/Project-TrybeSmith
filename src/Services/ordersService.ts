import ordersModel from '../models/ordersModel';

const getOrder = async () => {
  let ordersData = await ordersModel.getOrders();
  ordersData = ordersData.map((list) => Object.assign(list, { productsIds: [list.productsIds] }));

  return { status: 200, data: ordersData };
};

export default getOrder;