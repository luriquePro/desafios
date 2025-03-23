/**
 * Aguarda a resolução de varias promessas e retorna a soma de seus valores.
 *
 * @param {Promise<number>} promise1 - A primeira promessa que resolve para um número.
 * @param {Promise<number>} promise2 - A segunda promessa que resolve para um número.
 * @return {Promise<number>} - Uma promessa que resolve para a soma dos valores resolvidos.
 *
 * @example
 * const promise1 = Promise.resolve(5);
 * const promise2 = Promise.resolve(10);
 * addSomePromises(promise1, promise2).then(console.log); // Output: 15
 */
const addSomePromises = async (...args) => {
  const elements = await Promise.all(args);
  return elements.reduce((a, b) => a + b, 0);
};
