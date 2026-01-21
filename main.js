import './homework-8.js';
import './homework-9.js';
import { Modal } from './modal.js';
import { Form } from './form.js';
import { RegistrationForm } from './registration-form.js';

// 1. Пройти тест, результат прикрепить к PR'у.

// Done

// 2. Почитать про импорты файлов в другие файлы (side-effect import). 
// На основе этого создать файл main.js. Его единственного использовать в index.html, 
// а все остальные js файлы импортировать в главный.

// Done

// 3. Создать структуру на ваш выбор, как было показано в лекции 
// (имеется ввиду - с машинами/бьюти-продуктами). 
// Придумайте свою структуру и реализуйте наследуемость классов

class Gun {
  constructor(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
  }

  firetest() {
    console.log(`${this.manufacturer}, ${this.model} протестировано.`);
  }
}

class NewGun extends Gun {
  constructor(manufacturer, model) {
    super(manufacturer, model);
    console.log(`${this.manufacturer}, ${this.model} - новое оружие.`);
  }
}

class RefurbishedGun extends Gun {
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

const sw500 = new NewGun("Smith&Wesson", "500");
const m1911 = new NewGun("Dan Wesson Firearms", "Valor .45 ACP");
sw500.firetest();
m1911.firetest();

const m2browning = new RefurbishedGun("Colt", "M2HB", 97 + "%");
console.log(m2browning)

const ak47 = new RefurbishedGun("Kalashnikov", "AK-47", 57 + "%");
console.log(ak47);

m2browning.firetest();
ak47.firetest();
ak47.repair();

// 4. Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. 
// Он будет принимать 1 параметр через конструктор - айди модального окна. 
// Внутри класса будут методы:
//   I. Для открытия модального окна.
//  II. Для закрытия модального окна.
//  III. Для проверки, открыто ли сейчас модальное окно.
//  IV. Метод, который слушает кнопку (крестик) для закрытия модалки и 
// закрывает модалку (реализовать через eventListener) и вызывать в конструкторе
// Используя данный класс - переписать логику задания №9, связанной с модальными окнами. 
// Как? Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием.

const registrationModal = new Modal('modal');
const registrationButton = document.getElementById('openModal');
registrationButton.addEventListener('click', () => {registrationModal.openModal()});

// 5. Создать файл Form.js и реализовать класс для формы под названием Form. 
// Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
//   I. Для получения всех значений формы.
//  II. Для проверки валидности формы 
// (метод возвращает true/false в зависимости от того, валидна ли форма).
//  III. Для сброса значений формы.
// Используя данный класс - переписать логику задания №9, связанной с формами. 
// Как? Используя внутренние методы - мы можем управлять через айди формы получением значений и 
// всем, что должна делать модалка.

let user = {};

const userRegistrationForm = new RegistrationForm('userRegistrationForm');
userRegistrationForm.form.addEventListener('submit', (event) => {
    event.preventDefault();
    userRegistrationForm.check(() => {
    registrationModal.closeModal();
  });
})

// 6. Дополнительно проработать контекст функций, если тема непонятна и дается тяжело.

// Теория:
// doka.guide про this
// mdn про this
// learn.js про методы объекта, this (и задачами после)
// learn.js про привязку контекста к функции  (и задачами после)

// learn.js про class (только первые 2 темы)
// mdn про class
// metanit про class

// Можете использовать для поиска информации ютуб, гпт и другие статьи. Главное - понять материал