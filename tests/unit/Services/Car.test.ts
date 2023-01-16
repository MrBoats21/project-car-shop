import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import { output, input } from '../mocks/carMocks';

describe('Testa funcionalidades da classe Car', function () {
  it('Testa funcionalidade de listar todos os carros', async function () {
    const carOutput: Car[] = output.map((car) => new Car(car));

    sinon.stub(Model, 'find').resolves(carOutput);

    const service = new CarService();
    const result = await service.getCars();

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Testa funcionalidade de testar um carro específico', async function () {
    const carOutput: Car = new Car(input);
    const id = '83hs62ja1oc397abcad041b2';

    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.getCarById(id);

    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });

  it('Testa se não é possivel encontrar um carro inexistente', async function () {
    const id = '193g93la64c397abcad01200';

    sinon.stub(Model, 'findById').resolves(null);

    try {
      const service = new CarService();
      await service.getCarById(id);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Car not found');
    }

    sinon.restore();
  });

  it('Testa se é possível registrar um carro', async function () {
    const carInput: ICar = {
      model: 'Honda HR-V',
      year: 2022,
      color: 'White',
      status: true,
      buyValue: 148.900,
      doorsQty: 2,
      seatsQty: 4,
    };

    const carOutput: Car = new Car({
      id: 'us7392k01js927abcad040b2',
      model: 'Honda HR-V',
      year: 2022,
      color: 'White',
      status: true,
      buyValue: 148.900,
      doorsQty: 2,
      seatsQty: 4,
    });

    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();

    const result = await service.registerCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
});