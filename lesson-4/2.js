/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// const person = {};

// Решение

let today = new Date();
let days = today.getDate();

const person = {

  rate: '',
  salary: days,

  set getSalary (personNumber) {
    if (personNumber === 0) {
      return this.salary = 0;
    }

    return this.salary = personNumber * days;
  },

  get getSalary () {
    return this.salary;
  }

}

Object.defineProperty(person, 'rate', {
  enumerable: false,
  configurable: false
});

Object.defineProperty(person, 'salary', {
  enumerable: false,
  configurable: false
});

person.getSalary = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
console.log(person.getSalary);