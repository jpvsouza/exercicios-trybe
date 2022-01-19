const encodeDecode = require('./encodeDecode');

const encode = encodeDecode.encode;
const decode = encodeDecode.decode;

describe('Testa a função decode', () => {
    test('Testa se decode é uma função', () => {
        expect(typeof (decode)).toBe('function');
    });
    test('Testa se os numeros de 1 a 5 são convertidos nas vogais adequadas', () => {
        expect(decode('1')).toBe('a');
        expect(decode('2')).toBe('e');
        expect(decode('3')).toBe('i');
        expect(decode('4')).toBe('o');
        expect(decode('5')).toBe('u');
    });
    test('Testa se a string passada como parâmetro tem o mesmo número de caracteres da que é retornada', () => {
        expect(decode('string de teste').length).toBe(15);
    });
});

describe('Testa a função encode', () => {
    test('Testa se encode é uma função', () => {
        expect(typeof encode).toBe('function');
    });
    test('Testa se as vogais são convertidas em número de 1 a 5', () => {
        expect(encode('a')).toBe('1');
        expect(encode('e')).toBe('2');
        expect(encode('i')).toBe('3');
        expect(encode('o')).toBe('4');
        expect(encode('u')).toBe('5');
    });
    test('Testa se as demais letras não são convertidas', () => {
        expect(encode('b')).toBe('b');
        expect(encode('c')).toBe('c');
        expect(encode('d')).toBe('d');
        expect(encode('f')).toBe('f');
        expect(encode('g')).toBe('g');
        expect(encode('h')).toBe('h');
        expect(encode('j')).toBe('j');
        expect(encode('k')).toBe('k');
        expect(encode('l')).toBe('l');
        expect(encode('m')).toBe('m');
    });
});