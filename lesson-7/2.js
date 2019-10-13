/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение


function collect(array) {
  if (!Array.isArray(array)) {
      throw new Error ('Should be Array');
  }

  function convertToSimpleArray(array) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i]) && typeof array[i] !== 'number') {
        throw new Error ('Should be Array or Number');
      }
      if (typeof array[i] === 'number')  {
        result.push(array[i]);
      }
      else {
        result = result.concat(convertToSimpleArray(array[i]));
      }
   }

   return result;
  }

  const callback = function(sum, current /* index, arrayRef */) {
      return sum + current;
  };
  const result = convertToSimpleArray(array).reduce(callback, 0); // callback, accumulator

  return result; 
}



const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

// exports.collect = collect;