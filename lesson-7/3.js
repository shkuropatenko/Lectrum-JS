/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const result = createArray('x', 5);

function createArray(value, length) {

  if (typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(value)) {
      throw new Error ('Error!');
  }

  if (typeof length !== 'number') {
      throw new Error ('Should be number!');
  }

  const initialArray = [...new Array(length).keys()].fill(value);

  return initialArray;

  };

console.log(result); // [ x, x, x, x, x ]

// exports.createArray = createArray;