import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  status?: number;
}

const middlewareError = (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: err.message });
};

export default middlewareError;