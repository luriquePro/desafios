/**
 * Retorna a quantidade de argumentos passados para a função.
 *
 * @param {...any} args - Lista de argumentos passados para a função.
 * @returns {number} O número de argumentos recebidos.
 *
 * @example
 * console.log(argumentsLength(1, 2, 3)); // 3
 * console.log(argumentsLength()); // 0
 * console.log(argumentsLength("a", "b", "c", "d")); // 4
 */
var argumentsLength = function (...args) {
  return args.length;
};
