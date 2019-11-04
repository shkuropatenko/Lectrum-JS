/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение

const createFibonacciGenerator = () => {
  let a = 1;
  let b = 0;
  
  const generator = () => {
<<<<<<< HEAD
    const c = a + b;
=======
    let c = a + b;
>>>>>>> 48e7ab7f5caf85f44e169d2e3269b1ddf860e7aa
    a = b;
    b = c;

    return b;
  }

  return generator;
}

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

// exports.createFibonacciGenerator = createFibonacciGenerator;