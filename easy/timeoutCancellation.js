/**
 * Cria uma função cancelável que executa uma função `fn` após um tempo `t`.
 *
 * @param {Function} fn - A função a ser executada após o tempo `t`.
 * @param {Array} args - Os argumentos que serão passados para `fn`.
 * @param {number} t - O tempo em milissegundos antes da execução de `fn`.
 * @return {Function} - Retorna uma função que pode ser chamada para cancelar a execução de `fn`.
 */
var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(() => fn(...args), t);

  return () => clearTimeout(timeoutId);
};
