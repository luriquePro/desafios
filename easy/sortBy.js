/**
 * Ordena um array com base na função fornecida.
 *
 * @param {Array} arr - O array de entrada.
 * @param {Function} fn - A função que define a ordenação.
 * @returns {Array} O array ordenado.
 *
 * @example
 * sortBy([5, 4, 1, 2, 3], x => x);
 * // Retorna: [1, 2, 3, 4, 5]
 *
 * @example
 * sortBy([{x: 1}, {x: 0}, {x: -1}], obj => obj.x);
 * // Retorna: [{x: -1}, {x: 0}, {x: 1}]
 *
 * @example
 * sortBy([[3, 4], [5, 2], [10, 1]], arr => arr[1]);
 * // Retorna: [[10, 1], [5, 2], [3, 4]]
 */

const sortBy = (arr, fn) => arr.sort((a, b) => fn(a) - fn(b));
