/**
 * Divide um array em pedaços menores de tamanho especificado.
 *
 * @param {any[]} arr - O array a ser dividido.
 * @param {number} size - O tamanho de cada pedaço.
 * @returns {any[][]} Um array contendo os pedaços do array original.
 *
 * @example
 * console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
 * console.log(chunk([1, 2, 3, 4, 5, 6], 3)); // [[1, 2, 3], [4, 5, 6]]
 */
var chunk = function (arr, size) {
  const loops = Math.ceil(arr.length / size);

  const result = [];
  for (let i = 0; i < loops; i++) {
    result.push(arr.slice(i * size, (i + 1) * size));
  }

  return result;
};

/**
 * Adiciona um método `chunk` ao protótipo do Array para dividir o array em partes menores.
 *
 * @param {number} size - O tamanho de cada pedaço.
 * @returns {any[][]} Um novo array contendo os pedaços do array original.
 *
 * @example
 * console.log([1, 2, 3, 4, 5].chunk(2)); // [[1, 2], [3, 4], [5]]
 * console.log([1, 2, 3, 4, 5, 6].chunk(3)); // [[1, 2, 3], [4, 5, 6]]
 */
Array.prototype.chunk = function (size) {
  return chunk(this, size);
};
