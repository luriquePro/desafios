/**
 * Classe que implementa uma calculadora com operações encadeadas.
 *
 * A classe `Calculator` permite realizar operações matemáticas básicas, como soma, subtração, multiplicação, divisão e exponenciação.
 * Todas as operações retornam a instância da calculadora, permitindo o encadeamento de métodos.
 *
 * @class
 */
class Calculator {
  /**
   * Cria uma nova instância da classe `Calculator` com um valor inicial.
   *
   * @param {number} value - O valor inicial para a calculadora.
   */
  constructor(value) {
    Object.assign(this, { value });
  }

  /**
   * Adiciona um valor ao valor atual da calculadora.
   *
   * @param {number} value - O valor a ser somado ao valor atual.
   * @returns {Calculator} A instância da calculadora com o novo valor.
   */
  add(value) {
    this.value += value;
    return this;
  }

  /**
   * Subtrai um valor do valor atual da calculadora.
   *
   * @param {number} value - O valor a ser subtraído do valor atual.
   * @returns {Calculator} A instância da calculadora com o novo valor.
   */
  subtract(value) {
    this.value -= value;
    return this;
  }

  /**
   * Multiplica o valor atual da calculadora por um valor.
   *
   * @param {number} value - O valor com o qual o valor atual será multiplicado.
   * @returns {Calculator} A instância da calculadora com o novo valor.
   */
  multiply(value) {
    this.value *= value;
    return this;
  }

  /**
   * Divide o valor atual da calculadora por um valor.
   * Lança um erro se tentar dividir por zero.
   *
   * @param {number} value - O valor pelo qual o valor atual será dividido.
   * @throws {Error} Se o valor for zero, um erro será lançado informando que a divisão por zero não é permitida.
   * @returns {Calculator} A instância da calculadora com o novo valor.
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.value /= value;
    return this;
  }

  /**
   * Eleva o valor atual da calculadora a um determinado expoente.
   *
   * @param {number} value - O valor que representa o expoente.
   * @returns {Calculator} A instância da calculadora com o novo valor.
   */
  power(value) {
    this.value **= value;
    return this;
  }

  /**
   * Retorna o resultado final das operações realizadas.
   *
   * @returns {number} O valor atual da calculadora após todas as operações.
   */
  getResult() {
    return this.value;
  }
}
