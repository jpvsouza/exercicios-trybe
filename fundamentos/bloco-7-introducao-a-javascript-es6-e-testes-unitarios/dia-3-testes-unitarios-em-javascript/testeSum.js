const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const somaZeroEZero = sum(0, 0);
const somaQuatroECinco = sum(4, 5);
const somaNumberEString = sum(4, '5');


assert.strictEqual(somaQuatroECinco, 9, 'Erro no primeiro teste');
assert.strictEqual(somaZeroEZero, 0, 'Erro no segundo teste');
assert.strictEqual(somaNumberEString, 9, 'Erro no terceiro teste');
assert.throws(somaNumberEString, /^Error: parameters must be numbers$/);