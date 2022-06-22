/* import { Request, Response, NextFunction } from 'express';

import ordersService from '../Services/ordersService';

const getOrder = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const { status, data } = await ordersService.getOrder();
    return res.status(status).json(data);
  } catch (error) {
    next(error);
  }
};

export default getOrder; */