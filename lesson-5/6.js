/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function isEven(num) {
  if (typeof num !== 'number') {
    throw new Error('num is not a number type');
  }

  const number = !(num % 2) ? true : false;

  if (number) {
      console.log('true');
      return true;
      
  } else {
      console.log('false');
      return false;
  }
}

isEven(3); // false
isEven(4); // true
