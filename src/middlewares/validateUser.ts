// eslint-disable-next-line import/no-import-module-exports
import { Request, Response, NextFunction } from 'express';
// import { string } from 'joi';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const MIN_CARACTERS = 3;
  if (!username) {
    next({ status: 400, message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    next({ status: 422, message: '"username" must be a string' });
  }
  if (username.length < MIN_CARACTERS) {
    next({ status: 422, message: '"username" length must be at least 3 characters long' });
  }
  next();
};

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  const MIN_CARACTERS = 3;
  if (!classe) {
    next({ status: 400, message: '"classe" is required' });
  }
  if (typeof classe !== 'string') {
    next({ status: 422, message: '"classe" must be a string' });
  }
  if (classe.length < MIN_CARACTERS) {
    next({ status: 422, message: '"classe" length must be at least 3 characters long' }); 
  }
  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  const MIN_LEVEL = 1;
  if (!level) {
    next({ status: 400, message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    next({ status: 422, message: '"level" must be a number' });
  }
  if (level.length > MIN_LEVEL) {
    next({ status: 422, message: '"level" must be greater than or equal to 1' });
  }
  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const MAX_CARACTERS = 9;
  if (!password) {
    next({ status: 400, message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    next({ status: 422, message: '"password" must be a string' });
  }
  if (password.length < MAX_CARACTERS) {
    next({ status: 422, message: '"password" length must be at least 8 characters long' });
  }
  next();
};

export default {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
};