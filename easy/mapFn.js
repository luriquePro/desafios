/**
 * Aplica uma função a cada elemento de um array e retorna o array modificado.
 *
 * @param {any[]} arr - O array a ser modificado.
 * @param {Function} fn - A função a ser aplicada a cada elemento do array.
 *                        Recebe dois argumentos: o elemento atual e o índice.
 * @returns {any[]} O próprio array, após a transformação aplicada.
 *
 * @example
 * const arr = [1, 2, 3];
 * const fn = (x, i) => x * 2;
 * console.log(map(arr, fn)); // [2, 4, 6]
 */
var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }

  return arr;
};

/**
 * Extensão do prototype de Array que aplica a função de mapeamento personalizada.
 *
 * @param {Function} fn - A função a ser aplicada a cada elemento do array.
 *                        Recebe dois argumentos: o elemento atual e o índice.
 * @returns {any[]} O próprio array, após a transformação aplicada.
 *
 * @example
 * const arr = [1, 2, 3];
 * const fn = (x, i) => x * 2;
 * console.log(arr.rawMap(fn)); // [2, 4, 6]
 */
Array.prototype.rawMap = function (fn) {
  return map(this, fn);
};
