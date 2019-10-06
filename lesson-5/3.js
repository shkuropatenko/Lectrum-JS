/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f(param1, param2, param3) {
  for (const index of arguments) {

    if (typeof index !== 'number') {
      throw new Error('argument is not a number type');
    }
  }
  
  const result = (param1 - param2) / param3;

  return result;
}

console.log(f(9, 3, 2)); // 3

// exports.f = f;
