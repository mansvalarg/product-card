class Lamp {
  constructor(id) {
    this.element = document.getElementById(id);
  }
  turnOn() {
    this.element.classList.add("active");
  }
  turnOff() {
    this.element.classList.remove("active");
  }
  isActive() {
    return this.element.classList.contains("active");
  }
}

class Counter {
  constructor(buttonId) {
    this.button = document.getElementById(buttonId);
    this.init();
  }

  showSuccess() {
    console.log("Успех! Ты не безнадежен!");
  }

  init() {
    this.button.addEventListener("click", () => {
      this.showSuccess();
    });
  }
}

