/**
 * Cria um objeto de asserção para testar valores.
 *
 * @param {any} val - O valor a ser testado.
 * @returns {{
 *   toBe: (value: any) => boolean,
 *   notToBe: (value: any) => boolean
 * }} Um objeto contendo os métodos de teste `toBe` e `notToBe`.
 *
 * @throws {Error} Lança um erro com a mensagem "Not Equal" se os valores não forem iguais.
 * @throws {Error} Lança um erro com a mensagem "Equal" se os valores forem iguais.
 *
 * @example
 * expect(5).toBe(5); // true
 * expect(5).toBe(10); // Lança um erro "Not Equal"
 * expect(5).notToBe(10); // true
 * expect(5).notToBe(5); // Lança um erro "Equal"
 */
var expect = function (val) {
  return {
    /**
     * Verifica se o valor fornecido é igual ao valor testado.
     *
     * @param {any} value - O valor a ser comparado.
     * @returns {boolean} Retorna `true` se os valores forem iguais.
     * @throws {Error} Lança um erro com a mensagem "Not Equal" se os valores forem diferentes.
     */
    toBe(value) {
      if (val === value) return true;
      throw new Error("Not Equal");
    },

    /**
     * Verifica se o valor fornecido é diferente do valor testado.
     *
     * @param {any} value - O valor a ser comparado.
     * @returns {boolean} Retorna `true` se os valores forem diferentes.
     * @throws {Error} Lança um erro com a mensagem "Equal" se os valores forem iguais.
     */
    notToBe(value) {
      if (val === value) throw new Error("Equal");
      return true;
    }
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
