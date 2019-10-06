/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение

function f(day) {
  if (typeof day !== 'number') {
    throw new Error('day is not a number type');
  }

  if (day < 1 || day > 7) {
    throw new Error('day out of range 1-7');
  }

  const arr =  ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let dayOfNumber = '';

  for (let i = 0; i < arr.length; i++) {

    if ((day - 1) === i) {
      dayOfNumber = `${day} - ${arr[i]}`;

      console.log(dayOfNumber);
      return day;
    }
  }
  
}

f(1); // Воскресенье
f(4); // Среда
