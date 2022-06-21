import express from 'express';
import middlewareError from './middlewares/errorMiddleware';
import productsController from './controllers/productsController';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAllProducts);

app.use(middlewareError);

export default app;
