let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaDeTodos = 0;
let mediaAritmetica = 0;
let maiorNumero = 0;
let numerosImpares = 0;
let menorNumero = 1000;

for (let num of numbers) {
  somaDeTodos += num;

  if (num > maiorNumero) {
    maiorNumero = num;
  }

  if (num % 2 == 1) {
    numerosImpares += 1;
  }

  if (num < menorNumero) {
    menorNumero = num;
  }
}

console.log("A soma de todos elementos do array é " + somaDeTodos);

mediaAritmetica = somaDeTodos / numbers.length;

console.log("A média aritmetica dos elementos do array é " + mediaAritmetica);

if (mediaAritmetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

console.log("O maior numero do array é " + maiorNumero);

console.log("Esse array tem " + numerosImpares + " números impares");

console.log("O menor numero do array é " + menorNumero);

let lista = [];
for (index = 0; index < 25; index += 1) {
  lista[index] = index + 1;
}

console.log(lista);

for (let numero of lista) {
  console.log(numero % 2);
}
