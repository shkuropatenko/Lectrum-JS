/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function f(num) {
  if (typeof num !== 'number') {
    throw new Error('argument is not a number type');
  }

  return num ** 3;
}

console.log(f(2)); // 8

// exports.f = f;
