/**
 * Cria um contador com operações de incremento, decremento e reset.
 *
 * @param {number} init - O valor inicial do contador.
 * @returns {Object} Um objeto contendo os métodos `increment`, `decrement` e `reset`.
 *
 * @property {Function} increment - Incrementa o contador em 1 e retorna o novo valor.
 * @property {Function} decrement - Decrementa o contador em 1 e retorna o novo valor.
 * @property {Function} reset - Reseta o contador para o valor inicial e retorna esse valor.
 *
 * @example
 * const counter = createCounter(10);
 * console.log(counter.increment()); // 11
 * console.log(counter.increment()); // 12
 * console.log(counter.decrement()); // 11
 * console.log(counter.reset()); // 10
 */
var createCounter = function (init) {
  let count = init;

  const increment = () => {
    count++;
    return count;
  };

  const decrement = () => {
    count--;
    return count;
  };

  const reset = () => {
    count = init;
    return count;
  };

  return { increment, decrement, reset };
};
