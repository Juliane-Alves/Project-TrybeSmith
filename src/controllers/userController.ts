import { Request, Response, NextFunction } from 'express';

import userService from '../Services/userService';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, classe, level, password } = req.body;

    const tokenUser = await userService.createUser(username, classe, level, password);

    return res.status(201).json(tokenUser);
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
}; 