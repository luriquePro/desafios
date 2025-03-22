/**
 * Verifica se um objeto está vazio.
 *
 * A função verifica se o objeto não possui nenhuma entrada (chave-valor).
 *
 * @param {Object} obj - O objeto a ser verificado.
 * @returns {boolean} Retorna `true` se o objeto estiver vazio, ou `false` caso contrário.
 *
 * @example
 * console.log(isEmpty({})); // true
 * console.log(isEmpty({ a: 1 })); // false
 */
const isEmpty = (obj) => Object.keys(obj).length === 0;
