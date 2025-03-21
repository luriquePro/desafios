/**
 * Filtra os elementos de um array com base em uma função de callback.
 *
 * @param {Array} arr - O array a ser filtrado.
 * @param {Function} fn - A função de callback que será chamada para cada elemento do array.
 *                         Ela recebe dois parâmetros: o valor do elemento e o índice do elemento.
 *                         Deve retornar `true` para manter o elemento no resultado e `false` para removê-lo.
 * @returns {Array} Um novo array contendo apenas os elementos que passaram no teste da função `fn`.
 *
 * @example
 * const arr = [-2, -1, 0, 1, 2];
 * const fn = function plusOne(n) { return n + 1; };
 * console.log(filter(arr, fn)); // [0, 1, 2, 3]
 */
var filter = function (arr, fn) {
  const result = [];
  arr.forEach((n, i) => (fn(n, i) ? result.push(n) : undefined));
  return result;
};

/**
 * Extensão do prototype de Array que aplica a função de filtro personalizada.
 *
 * @param {Function} fn - A função de callback a ser usada para filtrar os elementos do array.
 * @returns {Array} Um novo array contendo os elementos filtrados.
 *
 * @example
 * const arr = [-2, -1, 0, 1, 2];
 * const fn = function plusOne(n) { return n + 1; };
 * console.log(arr.rawFilter(fn)); // [0, 1, 2, 3]
 */
Array.prototype.rawFilter = function (fn) {
  return filter(this, fn);
};
