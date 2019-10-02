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

const person = {};

// Решение

Object.defineProperties(person, {
  salary: {
    get() {
      const date = new Date();
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      const days = date.getDate();

      if(  (lastDay - days) < 20  ) {
          return 'bad salary';
        } else {
          return 'good salary';
        }
    }
  }
});
console.log(person.salary);


person.salary; // good salary

// exports.person = person;


