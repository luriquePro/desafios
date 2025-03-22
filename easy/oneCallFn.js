/**
 * Retorna uma função que pode ser chamada apenas uma vez.
 *
 * Após a primeira execução, chamadas subsequentes não terão efeito e retornarão `undefined`.
 *
 * @param {Function} fn - A função que será chamada apenas uma vez.
 * @returns {Function} Uma nova função que executa `fn` apenas na primeira chamada.
 *
 * @example
 * let fn = (a, b, c) => a + b + c;
 * let onceFn = once(fn);
 *
 * console.log(onceFn(1, 2, 3)); // 6
 * console.log(onceFn(2, 3, 6)); // undefined (não chama fn novamente)
 */
var once = function (fn) {
  let called = false;
  return function (...args) {
    if (called) return;
    called = true;

    return fn(...args);
  };
};
