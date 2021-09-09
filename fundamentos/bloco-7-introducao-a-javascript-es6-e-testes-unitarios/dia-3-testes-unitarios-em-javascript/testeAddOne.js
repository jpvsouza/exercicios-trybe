const assert = require('assert');
const addOne = array => {
    let novoArray = [];
    for (let index = 0; index < array.length; index += 1) {
        novoArray[index] = array[index] + 1;
    }
    return novoArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);