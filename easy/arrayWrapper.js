/**
 * Classe que encapsula um array de números inteiros e fornece operações personalizadas.
 */
class ArrayWrapper {
  /**
   * @type {number[]} nums - O array de números inteiros armazenado na instância.
   */
  nums = [];

  /**
   * Cria uma instância de ArrayWrapper.
   * @param {number[]} nums - O array de números inteiros a ser armazenado.
   */
  constructor(nums) {
    this.nums = nums;
  }

  /**
   * Retorna a soma de todos os elementos do array.
   * Este método sobrescreve a conversão da instância para um valor numérico, permitindo o uso do operador `+`.
   * @returns {number} A soma de todos os elementos no array.
   *
   * @example
   * const obj1 = new ArrayWrapper([1, 2]);
   * const obj2 = new ArrayWrapper([3, 4]);
   * console.log(obj1 + obj2); // 10
   */
  valueOf() {
    return this.nums.reduce((acc, curr) => acc + curr, 0);
  }

  /**
   * Retorna a representação do array como uma string no formato "[elemento1,elemento2,...]".
   * Este método sobrescreve a conversão da instância para string.
   * @returns {string} A representação em string do array.
   *
   * @example
   * const obj = new ArrayWrapper([1, 2, 3]);
   * console.log(String(obj)); // "[1,2,3]"
   */
  toString() {
    return JSON.stringify(this.nums);
  }
}
