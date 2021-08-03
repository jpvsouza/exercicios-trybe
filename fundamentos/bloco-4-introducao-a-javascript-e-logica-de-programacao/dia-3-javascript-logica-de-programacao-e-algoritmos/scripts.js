// let n = 4
// let linha = "";

// for (let index = 0; index < n; index += 1) {
//   linha += "*";
// }

// for (let index2 = n; index2 > 0; index2 -= 1) {
//   console.log(linha);
// }

// let n = 4;
// let linha = "";

// for (let index = 0; index < n; index +=1) {
//   linha += "*";
//   console.log(linha);
// }

// let n = 7;
// let linha = "";
// let espaço = "";

// for (let index = 0; index < n; index +=1) {
//   for (let contador = 0; contador < n - index; contador += 1) {
//     espaço += " ";
//   }
//   linha += "*";
//   console.log(espaço + linha);
//   espaço = "";
// }

//let n = 7;
// let linha = "";
// let espaço = "";

// for (let index = 0; index < n; index +=1) {
//   for (let contador = 0; contador < n - index; contador += 1) {
//     espaço += " ";
//   }
//   linha += "*";
//   console.log(espaço + linha);
//   espaço = "";
// }

let n = 11;
let linha = "";

let espaçoTotal = (n - 1) / 2;
let asteriscos = "*";
let espaço = "";

for (let index = 0; index < n; index += 2) {
  for (let indexInterno = 0; indexInterno < espaçoTotal; indexInterno += 1) {
    espaço += " ";
  }

  console.log(espaço + asteriscos);

  espaçoTotal -= 1;
  espaço = "";
  asteriscos += "**";
  
}