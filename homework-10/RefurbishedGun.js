import { Gun } from "./Gun.js";

export class RefurbishedGun extends Gun {
  constructor(manufacturer, model, condition) {
    super(manufacturer, model);
    this.condition = condition;
    if (this.condition >= 95 + "%") {
      console.log(`${this.model} - оружие восстановлено и готово к стрельбе.`);
    } else {
      console.log(`${this.model}: оценочное состояние ${this.condition} - необходим ремонт.`);
    }
  }

  repair() {
    console.log(`${this.manufacturer}, ${this.model} отправлено на восстановление.`);
  }
}