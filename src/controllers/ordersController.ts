import { Request, Response, NextFunction } from 'express';
import ordersService from '../Services/ordersService';

const getOrders = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await ordersService.getOrders();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default {
  getOrders,
};