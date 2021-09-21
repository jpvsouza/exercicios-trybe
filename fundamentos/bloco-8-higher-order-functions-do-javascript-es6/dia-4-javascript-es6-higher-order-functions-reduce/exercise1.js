// 1 - Dada uma matriz, transforme em um array.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const lista = arrays.reduce((acumula, elemento) => {
    let num = acumula.concat(elemento);
    return num;
})

function flatten() {
  return lista;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);