const assert = require('assert');
const wordLengths = palavras => {
    const letras = [];
    for (let index = 0; index < palavras.length; index += 1) {
        letras[index] = palavras[index].length;
    }
    return letras;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);