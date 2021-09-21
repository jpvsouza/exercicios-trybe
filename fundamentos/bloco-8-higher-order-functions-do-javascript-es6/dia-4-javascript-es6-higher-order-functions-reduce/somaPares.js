const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const soma = numbers.reduce((acumulador, numero) => (numero % 2 == 0) ? acumulador + numero : acumulador);

console.log(soma);