const sum = require('./sum');

describe('Testes da função sum', () => {
    test('Testa se 4 + 5 = 9', () => {
        expect(sum(4, 5)).toEqual(9);
    });
    // test();
    // test();
    // test();
});