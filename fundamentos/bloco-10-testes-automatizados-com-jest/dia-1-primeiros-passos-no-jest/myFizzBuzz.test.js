const { test, expect } = require('@jest/globals');
const exp = require('constants');
const { describe } = require('yargs');
const myFizzBuzz = require('./myFizzBuzz');

describe('Teste da função myFizzBuzz', () => {
    test('Testa se o retorno é fizzBuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('Testa se o retorno é fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    test('Testa se o retorno é buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    test('Testa se o retorno é um número não divisível por 5 e 3', () => {
        expect(myFizzBuzz(11)).toBe(11);
    });
    test('Testa se um parâmetro que não é um número é passado', () => {
        expect(myFizzBuzz('a')).toBe(false);
    });
});