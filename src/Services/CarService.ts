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

  public async getCars() {
    const carODM = new CarODM();
    const carsList = await carODM.getCars();

    return carsList.map((car) => this.createCarDomain(car));
  }

  public async getCarById(id:string) {
    const carODM = new CarODM();
    const car = await carODM.getCarById(id);

    return this.createCarDomain(car);
  }

  async updateCar(id: string, body: ICar) {
    const carODM = new CarODM();
    await carODM.update(id, body);
    const car = await carODM.getCarById(id);
  
    return this.createCarDomain(car);
  }
}

export default CarService;