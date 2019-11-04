/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение

<<<<<<< HEAD
// function bind(func, oliver, arg, arg2) {
//   // this.oliver = oliver.name;
//   // console.log(oliver.name)
//   // this.func = oliver;
//   // console.log(func.apply(this.oliver))
//   // console.log(func(oliver.name))
//   // console.log(func.apply(oliver.func()));
  
//   if (typeof func !== 'function') {
//     throw new Error ('First param is not a function!'); 
//   }

//   if (typeof oliver !== 'object') {
//     throw new Error ('Second param is not a object!'); 
//   }

//   if (Array.isArray(oliver)) {
//     throw new Error ('Second param is a Array!'); 
//   }

//   return function() {
//     this.oliver = oliver.name;
//     return func(arg, arg2, this.oliver)
//   }
// }

=======
>>>>>>> 48e7ab7f5caf85f44e169d2e3269b1ddf860e7aa
const bind = (func, context, ...rest) => {
  
  if (typeof func !== 'function') {
    throw new Error ('First param is not a function!'); 
  }

  if (typeof oliver !== 'object') {
    throw new Error ('Second param is not a object!'); 
  }

  if (Array.isArray(oliver)) {
    throw new Error ('Second param is a Array!'); 
  }

  return () => func.apply(context, rest);
};

function getName(greeting, message) {
  return `${greeting} ${message} ${this.name}.`;
}

const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.

// exports.bind = bind;