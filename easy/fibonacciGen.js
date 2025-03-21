/**
 * Gera a sequência de Fibonacci de forma infinita usando uma função geradora.
 *
 * Cada chamada para `next()` retorna o próximo número na sequência de Fibonacci.
 *
 * @generator
 * @yields {number} O próximo número da sequência de Fibonacci.
 *
 * @example
 * const gen = fibGenerator();
 * console.log(gen.next().value); // 0
 * console.log(gen.next().value); // 1
 * console.log(gen.next().value); // 1
 * console.log(gen.next().value); // 2
 * console.log(gen.next().value); // 3
 * console.log(gen.next().value); // 5
 */
var fibGenerator = function* () {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

/**
 * Retorna o i-ésimo número da sequência de Fibonacci.
 *
 * Essa função utiliza um gerador (`fibGenerator`) para obter o número de Fibonacci na posição especificada.
 *
 * @param {number} i - O índice do número de Fibonacci a ser retornado (0-based).
 * @returns {number} O i-ésimo número da sequência de Fibonacci.
 *
 * @example
 * console.log(getFibonacci(0)); // 0
 * console.log(getFibonacci(1)); // 1
 * console.log(getFibonacci(2)); // 1
 * console.log(getFibonacci(5)); // 5
 * console.log(getFibonacci(10)); // 55
 */
const getFibonacci = function (i) {
  const gen = fibGenerator();
  for (let j = 0; j < i; j++) {
    gen.next();
  }
  return gen.next().value;
};
