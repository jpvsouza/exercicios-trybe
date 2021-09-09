// 1 - Dada uma matriz, transforme em um array.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const lista = arrays.reduce((acumula, elemento) => {
    acumula.push(elemento);
})

function flatten() {
    console.log(lista);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);