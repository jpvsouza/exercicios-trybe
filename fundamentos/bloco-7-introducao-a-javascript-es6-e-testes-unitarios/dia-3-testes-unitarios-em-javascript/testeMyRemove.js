const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.equal(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ], 'o array retornado não é o igual ao array esperado');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'o array retornado não retorna o mesmo array');

// Verifique se o array passado por parâmetro não sofreu alterações
let arrayOriginal = [1, 2, 3, 4];
let arrayDaFuncao = myRemove(arrayOriginal, 3);
assert.ok(arrayOriginal === [1, 2, 3, 4]), 'O array original sofreu alterações';

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.strictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'o array retornado não é o devido')
