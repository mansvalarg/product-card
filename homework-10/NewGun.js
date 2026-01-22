import { Gun } from "./Gun.js";

export class NewGun extends Gun {
  constructor(manufacturer, model) {
    super(manufacturer, model);
    console.log(`${this.manufacturer}, ${this.model} - новое оружие.`);
  }
}