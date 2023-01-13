import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createCar() {
    const car = this.req.body;

    try {
      const newCar = await this.service.registerCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCars() {
    try {
      const carsList = await this.service.getAllCars();
      return this.res.status(200).json(carsList);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.getCarById(id);
      if (!car) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarController;
