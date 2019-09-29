/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// const person = {};

// Решение

const person = {

  salary: 'good salary',

  set getSalary (getSalary) {
    return this.salary = getSalary;
  },

  get getSalary () {
    return `${this.salary}`;
  }

}

let today = new Date();
let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
let days = today.getDate();

if(  (lastDay - days) < 20  ) {
  person.getSalary = 'bad salary';
  console.log(person.getSalary);
} else {
  console.log(person.getSalary);
}




