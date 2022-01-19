const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Testes da função myRemoveWithoutCopy', () => {
    test('Testa se a função retorna o array sem o numero 3', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('Testa se a função não retorna um array igual', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('Testa se o array original sofreu alterações', () => {
        const arrayOriginal = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(arrayOriginal, 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('Testa se a função não altera o array com numero 5 de parâmetro', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});