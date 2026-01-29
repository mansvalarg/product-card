export class Cafe {

  constructor(cafeName, location) {
    this.cafeName = cafeName;
    this.location = location;
  }
  
  getInfo() {
    return console.log(`${this.cafeName} находится по адресу ${this.location}`);
  }

  orderDrink(drink, quantity) {
    console.log(`Заказ:${drink.name} - ${quantity}шт.`);
    drink.serve();
  }

}