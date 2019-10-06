/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение

function getDivisors(num) {
  if (typeof num !== 'number') {
    throw new Error('num is not a number type');
  }
  
  if (num < 1) {
    throw new Error('number less than one');
  }

  const mas = [];
  for (let i = 1; i <= num; i++) {
    if (!(num % i)) {
      mas.push(i)
    }
  }
  
  console.log(mas)
  return mas;
}

getDivisors(12); // [1, 2, 3, 4, 6, 12]

// exports.getDivisors = getDivisors;
