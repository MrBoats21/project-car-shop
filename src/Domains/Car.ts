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
    
  public getModel() {
    return this.model;
  }
    
  public setModel(model: string) {
    this.model = model;
  }
    
  public getYear() {
    return this.year;
  }
    
  public setYear(year: number) {
    this.year = year;
  }
    
  public getColor() {
    return this.color;
  }
    
  public setColor(color: string) {
    this.color = color;
  }

  public getStatus() {
    return this.status;
  }
    
  public setStatus(status: boolean) {
    this.status = status;
  }

  public getBuyValue() {
    return this.buyValue;
  }
    
  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }
    
  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
    
  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getId() {
    return this.id;
  }
    
  public setId(id: string) {
    this.id = id;
  }
}
    
export default Car;