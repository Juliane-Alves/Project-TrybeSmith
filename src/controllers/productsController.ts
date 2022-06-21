import { Request, Response, NextFunction } from 'express';

import productsService from '../Services/productsService';

const getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const productsList = await productsService.getAllProducts();

    return res.status(200).json(productsList);
  } catch (error) {
    next(error);
  }
};

export default {
  getAllProducts,
}; 