export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  showInfo() {
    console.log({
      name: this.name, 
      size: this.size, 
      price: this.price , 
      temperature: this.#temperature
    });
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #make() {
    console.log(`Готовим ${this.name}`);
    this.getRecipe();
  }

  serve() {
    this.#make(this.name);
    console.log(`${this.name} готов. Относим заказ.`);
  }

}