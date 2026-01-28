import { Drink } from "./Drink.js";

export class Coffee extends Drink {

  constructor(name, size, price, temperature, espessoAmount, milkAmount, waterAmount) {
    super(name, size, price, temperature);
    this.espessoAmount = espessoAmount;
    this.milkAmount = milkAmount;
    this.waterAmount = waterAmount;
  }

  getRecipe() {
    return console.log(`Смешать часть эспрессо - ${this.espessoAmount}, часть молока - ${this.milkAmount}, часть воды - ${this.waterAmount}`);
  }

}