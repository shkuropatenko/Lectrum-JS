/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f() {
  let num = 0;
  for (const index of arguments) {
    
    if (typeof index !== 'number') {
      throw new Error('argument is not a number type');
    }

    num += index;
  }
  
  return num;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

// exports.f = f;
