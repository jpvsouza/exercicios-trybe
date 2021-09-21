const { expect } = require('@jest/globals');
const { error } = require('console');
const sum = require('./sum');

describe('Testes da função sum', () => {
    test('Testa se 4 + 5 = 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    test('Testa se 0 + 0 = 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    test('Testa se a função lança erro quando um parâmetro é string', () => {
        expect(() => {sum(4, '5')}).toThrow();
    });
    test('Testa se a mensagem de erro é "parameters must be numbers"', () => {
        expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
    });
});