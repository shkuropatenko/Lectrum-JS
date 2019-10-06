/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function isPositive(num) {
  if (typeof num !== 'number') {
    throw new Error('num is not a number type');
  }

  const number = num > 0 ? true : false;

  if (number) {
      console.log('true');
      return true;
      
  } else {
      console.log('false');
      return false;
  }
}

isPositive(-3); // false
isPositive(3); // true