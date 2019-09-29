/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение


function truncate(string, maxLength) {

  if (typeof string !== 'string') {
    console.log('Use a string for the first parameter!')
    return string;
  }

  if (typeof maxLength !== 'number' || isNaN(maxLength) ) {
    console.log('Use a number for the second parameter!');
    return maxLength;
  }

  if (string.length > maxLength) {
    let newString = string.slice(0, maxLength - 3);
    console.log(`${newString}...`);

    return newString;
  }
  
  console.log(string);
  return string;
}


truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'