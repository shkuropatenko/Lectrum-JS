/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение



function f(arr) {

  if ( !(Array.isArray(arr)) ){
    throw new Error('argument is not array')
  }

  if (!arr.length) {
    throw new Error('array is empty')
  }

  function recurs(arr) {

    if (arr.length > 1) {
      console.log(arr.splice(0, 1));
      recurs(arr);

    } else {
      console.log(arr); 
    }

  }
  recurs(arr);

}

f([1, 2, 3]);

// 1
// 2
// 3

// expo


// rts.f = f;
