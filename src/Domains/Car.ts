import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(data: ICar) {
    this.id = data.id;
    this.model = data.model;
    this.year = data.year;
    this.color = data.color;
    this.buyValue = data.buyValue;
    this.doorsQty = data.doorsQty;
    this.seatsQty = data.seatsQty;
    this.status = data.status || false;
  }
}

export default Car;