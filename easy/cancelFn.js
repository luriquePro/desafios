/**
 * Cria uma função que executa `fn` imediatamente e continua chamando-a
 * a cada `t` milissegundos até que a função de cancelamento seja chamada.
 *
 * @param {Function} fn - A função a ser executada repetidamente.
 * @param {Array} args - Os argumentos a serem passados para `fn`.
 * @param {number} t - O intervalo de tempo (em ms) entre cada chamada de `fn`.
 * @returns {Function} Uma função de cancelamento que interrompe as execuções futuras de `fn`.
 */
var cancellable = function (fn, args, t) {
  fn(...args);

  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  return () => clearTimeout(intervalId);
};
