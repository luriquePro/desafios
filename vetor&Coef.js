/**
 * Objetivos:
 * - Criar um vetor com 5 números inteiros
 * - Conseguir todos os subconjuntos possiveis
 * - Filtrar todos que a soma de seus elementos, não seja divisivel por K
 */

/**
 * Objetivo:
 * - Criar um vetor com números inteiros aleatórios e únicos.
 * - Gerar todos os subconjuntos possíveis do vetor.
 * - Filtrar os subconjuntos cuja soma dos elementos NÃO seja divisível por K.
 */

/**
 * Gera um coeficiente aleatório entre 1 e 9.
 *
 * @returns {number} Um número inteiro entre 1 e 9.
 */
const generateCoefficient = () => {
  const coefficient = Math.floor(Math.random() * 10);

  if (coefficient === 0) {
    return generateCoefficient();
  }

  return coefficient;
};

/**
 * Gera um vetor com `length` números inteiros aleatórios e únicos.
 *
 * @param {number} [length=5] - O tamanho do vetor (deve estar entre 1 e 10).
 * @returns {number[]} Um vetor de números inteiros aleatórios e únicos.
 */
const generateVector = (length = 5) => {
  if (length > 10 || length < 1) {
    return [];
  }

  const vector = [];

  for (let i = 0; i < length; i++) {
    const element = Math.floor(Math.random() * 10);

    if (vector.includes(element)) {
      i--;
    } else {
      vector.push(element);
    }
  }

  return vector;
};

/**
 * Gera todos os subconjuntos possíveis de um vetor.
 *
 * @param {number[]} vectorNumbers - O vetor base para gerar os subconjuntos.
 * @returns {number[][]} Um array contendo todos os subconjuntos possíveis do vetor.
 */
const generateSubsets = (vectorNumbers) => {
  let resultado = [];

  const backtrack = (vectorNumbersTemp, inicio) => {
    resultado.push([...vectorNumbersTemp]);

    for (let i = inicio; i < vectorNumbers.length; i++) {
      vectorNumbersTemp.push(vectorNumbers[i]);
      backtrack(vectorNumbersTemp, i + 1);
      vectorNumbersTemp.pop();
    }
  };

  backtrack([], 0);
  return resultado;
};

/**
 * Soma todos os elementos de um vetor.
 *
 * @param {number[]} vector - O vetor cujos elementos serão somados.
 * @returns {number} A soma de todos os elementos do vetor.
 */
const sumElements = (vector) => {
  let sum = 0;

  for (const element of vector) {
    sum += element;
  }

  return sum;
};

// Gerando valores e subconjuntos
const k = generateCoefficient();
const vector = generateVector(3);
const subsets = generateSubsets(vector);

const noDivisiblePerK = [];
const divisiblePerK = [];

// Separando subconjuntos que são divisíveis e não divisíveis por K
for (const subset of subsets) {
  if (sumElements(subset) % k === 0) {
    divisiblePerK.push(subset);
  } else {
    noDivisiblePerK.push(subset);
  }
}

/**
 * Formata um vetor de subconjuntos para exibição no console.
 * 
 * @param {number[][]} vector - O vetor contendo subconjuntos.
 * @returns {string[]} Um array de strings formatadas para exibição.
 */
const formatVectorToConsole = (vector) => vector.map((subset) => `\t ${subset}`);

const scape = "=".repeat(100);
const noDivisibleFormatted = formatVectorToConsole(noDivisiblePerK);
const divisibleFormatted = formatVectorToConsole(divisiblePerK);

console.log(scape);
console.log("\t Seu Coeficiente é ", k);
console.log("\t Seu Vetor é ", vector);
console.log("\t Seus Vetor tem ", subsets.length, " Subconjuntos");
console.log("\t Dentro deles: ", divisiblePerK.length, " São divisíveis por ", k);
console.log("\t E ", noDivisiblePerK.length, " Não são divisiveis por ", k);
console.log(scape);
console.log("Os subconjuntos Diviveis por ", k, " São: ");
console.log("\n", ...divisibleFormatted, "\n");
console.log(scape);
console.log("Os subconjuntos Nao Diviveis por ", k, " são: ");
console.log("\n", ...noDivisibleFormatted, "\n");
console.log(scape);
