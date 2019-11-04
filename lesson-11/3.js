<<<<<<< HEAD
const createFibonacciGenerator = () => {
    let a = 1;
    let b = 0;
  
    const generator = () => {
        const obj = {
            print: () => {
                const c = a + b;
=======
/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
const createFibonacciGenerator = () => {
    let a = 1;
    let b = 0;
    let y;
    
    const generator = () => {
        const obj = {
            print: () => {
                let c = a + b;
>>>>>>> 48e7ab7f5caf85f44e169d2e3269b1ddf860e7aa
                    a = b;
                    b = c;
                
                    return b
            },
            reset: () => {
                    a = 1;
                    b = 0;
<<<<<<< HEAD
                return 
=======
                return y
>>>>>>> 48e7ab7f5caf85f44e169d2e3269b1ddf860e7aa
            },
        };
        
        return obj;
      }
    
      return generator();
}

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2
<<<<<<< HEAD
=======

// exports.createFibonacciGenerator = createFibonacciGenerator;
>>>>>>> 48e7ab7f5caf85f44e169d2e3269b1ddf860e7aa
