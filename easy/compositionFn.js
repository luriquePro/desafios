/**
 * Retorna uma função que é a composição das funções fornecidas no array.
 * As funções são aplicadas da direita para a esquerda.
 *
 * @param {Function[]} functions - Um array de funções, onde cada função recebe um número inteiro como entrada e retorna um número inteiro como saída.
 * @returns {Function} Uma nova função que aplica as funções do array em ordem reversa.
 *
 * @example
 * const functions = [x => x + 1, x => x * x, x => 2 * x];
 * const fn = compose(functions);
 * console.log(fn(4)); // 65
 *
 * @example
 * const functions = [x => 10 * x, x => 10 * x, x => 10 * x];
 * const fn = compose(functions);
 * console.log(fn(1)); // 1000
 *
 * @example
 * const functions = [];
 * const fn = compose(functions);
 * console.log(fn(42)); // 42 (Função identidade)
 */
var compose = function (functions) {
  return function (x) {
    if (!functions.length) {
      return x;
    }

    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }

    return x;
  };
};

const fns01 = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const fns02 = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
const fns03 = [(x) => x + 1, (x) => 2 * x];
const fn = compose(fns02);
