// eslint-disable-next-line import/no-import-module-exports
import { Request, Response, NextFunction } from 'express';
// import { string } from 'joi';

const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  const MIN_CARACTERS = 3;
  if (!name) {
    next({ status: 400, message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    next({ status: 422, message: '"name" must be a string' });
  }
  if (name.length < MIN_CARACTERS) {
    next({ status: 422, message: '"name" length must be at least 3 characters long' });
  }
  next();
};
    
export default {
  nameValidation,
};