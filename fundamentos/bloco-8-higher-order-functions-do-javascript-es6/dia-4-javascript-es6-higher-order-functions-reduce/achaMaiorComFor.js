const array = [1, 3, 5, 8, 9, 10, 20, 18, 2];

const maior = (array) => {
    let acumulador = 0;
    for (num in array) {
        if (array[num] > acumulador) acumulador = array[num];
    }
    return acumulador;
}

console.log(maior(array));