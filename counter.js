/**
 * Objetivo:
 * - Criar uma função para retornar uma função contador.
 *    - A função deve iniciar retornando o número inteiro `n`.
 *    - A cada chamada subsequente, deve retornar 1 a mais que a anterior.
 *    - `n` pode ser qualquer número inteiro.
 */

/**
 * Cria um contador que inicia em `n` e incrementa a cada chamada.
 *
 * @param {number} n - O valor inicial do contador.
 * @returns {Function} Uma função que, ao ser chamada, retorna o próximo número na sequência.
 */
const createCounter = function (n) {
  return function () {
    return n++;
  };
};
