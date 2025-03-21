/**
 * Objetivo:
 * - Criar um prototype no Array para retornar o ultimo item de um array
 *    - Caso não exista, deve retornar -1.
 *    - Arr deve ser um JSON válido
 *    - 0 <= Arr.length <= 1000
 */

/**
 * Retorna o último elemento do array.
 *
 * @returns {*} O último elemento do array ou -1 se o array estiver vazio.
 */
Array.prototype.last = function () {
  // Checar se existe elementos
  if (this.length === 0) {
    return -1;
  }

  // Retornar o ultimo
  return this[this.length - 1];
};

const nums = [null, {}, 3];

console.log(nums.last());
