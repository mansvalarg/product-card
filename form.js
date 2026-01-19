// homework-10
// 5. Создать файл Form.js и реализовать класс для формы под названием Form. 
// Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
//   I. Для получения всех значений формы.
//  II. Для проверки валидности формы 
// (метод возвращает true/false в зависимости от того, валидна ли форма).
//  III. Для сброса значений формы.
// Используя данный класс - переписать логику задания №9, связанной с формами. 
// Как? Используя внутренние методы - мы можем управлять через айди формы получением значений и 
// всем, что должна делать модалка.

export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getData() {
    return Object.fromEntries(new FormData(this.form).entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}

export class RegistrationForm extends Form {
  constructor(formId) {
    super(formId);
  }

  check(onSuccess) {
    const password = this.form.querySelector('#password').value
    const confirmPassword = this.form.querySelector('#confirmPassword').value
    const passwordsMatch = password === confirmPassword;
    if (!this.isValid() || !passwordsMatch) {
    alert('Регистрация отклонена: проверьте правильность данных или совпадение паролей!');
    return;
    }
    const userData = this.getData();
    userData.createdOn = new Date();
    let user = userData;
    console.log('Новый пользователь:', user);
    alert('Регистрация успешна!');
    onSuccess();
    this.reset();
  }
}