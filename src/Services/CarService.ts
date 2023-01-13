import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async registerCar(data: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create({ ...data, status: data.status || false });
    return this.createCarDomain(newCar);
  }
}

export default CarService;