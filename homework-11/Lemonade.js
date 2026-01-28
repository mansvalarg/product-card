import { Drink } from "./Drink.js";

export class Lemonade extends Drink {

  constructor(name, size, price, temperature, syrupType) {
    super(name, size, price, temperature);
    this.syrupType = syrupType;
  }

  getRecipe() {
    return console.log(`Добавить ${this.syrupType} в воду. Смешать.`);
  }

}