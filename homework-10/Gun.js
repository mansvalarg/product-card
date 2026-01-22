

export class Gun {
  constructor(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
  }

  firetest() {
    console.log(`${this.manufacturer}, ${this.model} протестировано.`);
  }
}