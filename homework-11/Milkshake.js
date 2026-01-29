import { Drink } from "./Drink.js";

export class Milkshake extends Drink {

  constructor(name, size, price, temperature, icecream, flavor) {
    super(name, size, price, temperature);
    this.icecream = icecream;
    this.flavor = flavor;
  }

  getRecipe() {
    return console.log(`Взбить в блендере ${this.icecream} и молоко, добавить ${this.flavor}`);
  }

}