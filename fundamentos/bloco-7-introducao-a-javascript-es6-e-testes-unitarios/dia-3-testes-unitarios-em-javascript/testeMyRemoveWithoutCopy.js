const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'O array retornado não é o esperado');

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'o array retornado é igual ao array que foi passado mas deveria faltar o 3')

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
let arrayOriginal = [1, 2, 3, 4];
let arrayDaFuncao = myRemoveWithoutCopy(arrayOriginal, 3);
assert.ok([1, 2, 3, 4] === arrayOriginal, 'O array original sofreu alterações');

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'O array retornado não é o esperado');
