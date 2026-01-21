import { Form } from "./form";

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