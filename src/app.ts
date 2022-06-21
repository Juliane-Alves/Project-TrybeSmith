import express from 'express';
import middlewareError from './middlewares/errorMiddleware';
import productsController from './controllers/productsController';
import validateName from './middlewares/validateName';
import amountValidate from './middlewares/amountValidate';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAllProducts);

app.post(
  '/products', 
  validateName.nameValidation, 
  amountValidate.amountValidation, 
  productsController.createProducts,
);

app.use(middlewareError);

export default app;
