const array = [1, 3, 5, 8, 9, 10, 20, 18, 2];

const maior = array.reduce((acumulador ,numero) => {
    if (acumulador > numero) {
        return acumulador;
    }
    else return numero;
}, 21)

console.log(maior);