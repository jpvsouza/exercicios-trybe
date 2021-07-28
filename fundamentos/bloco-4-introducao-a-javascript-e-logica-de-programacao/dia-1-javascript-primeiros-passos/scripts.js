let a = 4;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a /b);
console.log(a % b);

let numeroA = 4;
let numeroB = 5;

if (numeroA > numeroB) {
  console.log(numeroA);
}
else if (numeroB > numeroA) {
  console.log(numeroB);
}
else {
  console.log("Os numeros são iguais")
}

let primeiro = 3;
let segundo = 4;
let terceiro = 5;

if (primeiro > segundo && primeiro > terceiro) {
  console.log(primeiro);
}
else if (segundo > primeiro && segundo > terceiro) {
  console.log(segundo);
}
else if (terceiro > primeiro && terceiro > segundo) {
  console.log(terceiro);
}
else {
  console.log("Os numeros são iguais");
}

let sinal = -5;

if (sinal < 0) {
  console.log("negative");
}
else if (sinal > 0) {
  console.log("positive");
}
else {
  console.log("zero");
}

let anguloA = 60;
let anguloB = 50;
let anguloC = 70;

if (anguloA && anguloB && anguloC > 0) {
  if (anguloA + anguloB + anguloC == 180) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
else {
  console.log("Erro! Todos os ângulos devem ter valores positivos");
}

let peca = "Peao";
peca.toLowerCase();

switch (peca) {
  case "peao":
    console.log("Uma casa para frente")
    break;
  case "torre":
    console.log("Se move na horizontal e vertical")
    break;
  case "cavalo":
    console.log("Anda em L")
    break;
  case "bispo":
    console.log("Se move na diagonal")
    break;
  case "dama":
    console.log("Qualquer direção quantas casas quiser")
    break;
  case "rei":
    console.log("Uma casa para qualquer direção")
    break;
  default:
    console.log("Erro! Digite uma peça válida no singular.");
    break;        
}

let nota = 69;

switch (nota) {
  case nota < 50:
    console.log("F");
    break;
  case nota >= 50 && nota < 60:
    console.log("E");
    break;
  case nota >= 60 && nota < 70:
    console.log("D");
    break;
  case nota >= 70 && nota < 80:
    console.log("C");
    break;
  case nota >= 80 && nota < 90:
    console.log("B");
    break;
  case nota >= 90:
    console.log("A");
    break;
  default:
    console.log("Erro!");
    break;
}

let um = 4;
let dois = 5;
let tres = 6;

if (um % 2 == 0 || dois % 2 == 0 || tres % 2 == 0)
{
  console.log(true);
}
else {
  console.log(false);
}

let primeiroNumero = 2;
let segundoNumero = 3;
let terceiroNumero = 4;

if (primeiroNumero % 2 == 1 || segundoNumero % 2 == 1 || terceiroNumero % 2 == 1) {
  console.log(true);
}
else {
  console.log(false);
}

let custoProduto = 1000;
let vendaProduto = 2000;
let valorCustoTotal = custoProduto * 1.2;

if (custoProduto > 0 || vendaProduto > 0) {
  console.log(1000 * (vendaProduto - valorCustoTotal))
}
else {
  console.log("Erro! Os valores de entrada devem ser maiores que zero");
}

let salarioBruto = 3000;
let inssDeduzido;
let impostoDeRenda;

if (salarioBruto <= 1556.94) {
  inssDeduzido = salarioBruto - 0.08 * salarioBruto;
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inssDeduzido = salarioBruto - 0.09 * salarioBruto;
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  inssDeduzido = salarioBruto - 0.11 * salarioBruto;
}
else if (salarioBruto > 5189.82) {
  inssDeduzido = salarioBruto - 570.88;
}

if (inssDeduzido <= 1903.98) {
  impostoDeRenda = 0;
}
else if (inssDeduzido > 1903.98 && inssDeduzido <= 2826.65) {
  impostoDeRenda = inssDeduzido * 0.075 - 142.8;
}
else if (inssDeduzido > 2826.65 && inssDeduzido <= 3751.05) {
  impostoDeRenda = inssDeduzido * 0.15 - 354.8;
}
else if (inssDeduzido < 3751.05 && inssDeduzido <= 4664.68) {
  impostoDeRenda = inssDeduzido * 0.225 - 636.13;
}
else if (inssDeduzido > 4664.68) {
  impostoDeRenda = inssDeduzido * 0.275 - 869.36;
}

let salarioLiquido = inssDeduzido - impostoDeRenda;

console.log(salarioLiquido);
