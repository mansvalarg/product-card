import { Drink } from "./Drink.js";

export class Fresh extends Drink {

  constructor(name, size, price, temperature, fruitType) {
    super(name, size, price, temperature);
    this.fruitType = fruitType;
  }

  getRecipe() {
    return console.log(`Выжать ${this.fruitType} - 3шт. , добавить воду - 1 стакан, мёд - 1 ч.л.`);
  }

}