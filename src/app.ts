import express from 'express';
import middlewareError from './middlewares/errorMiddleware';
import productsController from './controllers/productsController';
import validateName from './middlewares/validateName';
import amountValidate from './middlewares/amountValidate';
import validateUser from './middlewares/validateUser';
import userController from './controllers/userController';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAllProducts);

app.post(
  '/products', 
  validateName.nameValidation, 
  amountValidate.amountValidation, 
  productsController.createProducts,
);

app.post(
  '/users',
  validateUser.validateUsername,
  validateUser.validateClasse,
  validateUser.validateLevel,
  validateUser.validatePassword,
  userController.createUser,

);

app.use(middlewareError);

export default app;
