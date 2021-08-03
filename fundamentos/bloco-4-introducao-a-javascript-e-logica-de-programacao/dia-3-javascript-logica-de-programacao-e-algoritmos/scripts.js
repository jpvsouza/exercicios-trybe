let n = 6
let linha = "";

for (let index = 0; index < n; index += 1) {
  linha += "*";
}

for (let index2 = n; index2 > 0; index2 -= 1) {
  console.log(linha);
}

