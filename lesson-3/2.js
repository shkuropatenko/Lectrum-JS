/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение


function checkSpam(source, example) {

  for (let i = 0; i < arguments.length; i++ ) {
  
    if (typeof arguments[i] !== 'string' ) {
      console.log('Use string!');
      return arguments[i];
    }

    if (!arguments[i]) {
      console.log('Use not empty string.');
      return arguments[i];
    }

  }

  let firstStr = source.toLowerCase();
  let secondStr = example.toLowerCase();

  if (firstStr.indexOf(secondStr) !== -1) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true