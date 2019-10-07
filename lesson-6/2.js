/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter (array, filteredArray) {
  if (!(Array.isArray(array))) {
      throw new Error ('array is not Array')
  }

  if (typeof filteredArray !== 'function') {
      throw new Error ('filteredArray is not a function')
  }
 
  for (let i = 0; i < array.length; i++) {
    const filtered = [];
    const result = filteredArray(array[i], i, array);
    
    if (result) {
      
      filtered.push(array[i])
      return filtered;
    }
  }
}

const filteredArray = filter(array, (element, index, arrayRef) => {
  console.log(`${index}:`, element, arrayRef);
  return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

// exports.filter = filter;