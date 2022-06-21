// eslint-disable-next-line import/no-import-module-exports
import { Request, Response, NextFunction } from 'express';
// import { string } from 'joi';

const amountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  const MIN_CARACTERS = 3;
  if (!amount) {
    next({ status: 400, message: '"amount" is required' });
  }
  if (typeof amount !== 'string') {
    next({ status: 422, message: '"amount" must be a string' });
  }
  if (amount.length < MIN_CARACTERS) {
    next({ status: 422, message: '"amount" length must be at least 3 characters long' });
  }
  next();
};
    
export default {
  amountValidation,
};