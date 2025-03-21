/**
 * Objetivo:
 * - Implementar uma função que reduz um array aplicando uma função de redução `fn`.
 * - A função recebe um array de números `nums`, uma função `fn` e um valor inicial `init`.
 * - A função `fn` é aplicada sequencialmente a cada elemento do array, acumulando o resultado.
 * - Retorna o valor final após a aplicação de `fn` em todos os elementos de `nums`.
 *
 * Parâmetros:
 * @param {number[]} nums - Array de números inteiros.
 * @param {Function} fn - Função redutora que recebe o acumulador e o valor atual.
 * @param {number} init - Valor inicial do acumulador.
 *
 * Retorno:
 * @returns {number} - Resultado final da redução do array.
 *
 * Exemplo de uso:
 * const nums = [1, 2, 3, 4];
 * const fn = (accum, curr) => accum + curr * curr;
 * const init = 0;
 * console.log(reduce(nums, fn, init)); // Saída: 30
 */
var reduce = function (nums, fn, init) {
  return nums.reduce((acc, curr) => fn(acc, curr), init);
};
