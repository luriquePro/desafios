/**
 * Pausa a execução da função assíncrona por um determinado tempo.
 *
 * @param {number} millis - O tempo em milissegundos que a função deve esperar antes de resolver a Promise.
 * @returns {Promise<void>} - Uma Promise que resolve após `millis` milissegundos.
 *
 * @example
 * let t = Date.now();
 * sleep(100).then(() => {
 *   console.log(Date.now() - t); // Aproximadamente 100
 * });
 *
 * @example
 * await sleep(200); // Aguarda 200ms antes de continuar a execução
 */

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
