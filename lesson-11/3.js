const createFibonacciGenerator = () => {
    let a = 1;
    let b = 0;
  
    const generator = () => {
        const obj = {
            print: () => {
                const c = a + b;
                    a = b;
                    b = c;
                
                    return b
            },
            reset: () => {
                    a = 1;
                    b = 0;
                return 
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
