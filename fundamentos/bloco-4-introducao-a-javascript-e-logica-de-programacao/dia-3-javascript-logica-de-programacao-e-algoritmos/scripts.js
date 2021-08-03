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

let n = 7;
let linha = "";
let espaço = "";

for (let index = 0; index < n; index +=1) {
  for (let contador = 0; contador < n - index; contador += 1) {
    espaço += " ";
  }
  linha += "*";
  console.log(espaço + linha);
  espaço = "";
}
