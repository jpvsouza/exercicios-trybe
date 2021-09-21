// const { test, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const myRemove = require('./myRemove');

describe('Testes da função myRemove', () => {
    test('Testa se retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('Testa se, após passar pela função, o array continua igual', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('Testa se o array passado por parâmetro NÃO sofreu alterações', () => {
        const arrayOriginal = [1, 2, 3, 4];
        const arrayAlterado = myRemove(arrayOriginal, 3);
        expect(arrayOriginal).not.toEqual(arrayAlterado);
    });
    test('Testa se o array não vai remover nada ao passar o parâmetro 5', () => {
        const arrayOriginal = [1, 2, 3, 4];
        expect(myRemove([1, 2, 3, 4], 5)).toEqual(arrayOriginal);
    });
});