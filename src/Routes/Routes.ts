import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).createCar());

routes.get('/cars', (req, res, next) => new CarController(req, res, next).getCars());
  
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCarById());

routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());

export default routes;