let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

let base = 5;
let altura = 8;
let area = base * altura;

console.log(area);

let perimetro = 2 * (base + altura);

console.log(perimetro);

let nota = 69;
if (nota >= 80) {
  console.log("Aprovado");
}
else if (nota < 80 && nota >= 60) {
  console.log("Espera")
}
else if (nota < 60) {
  console.log("Reprovado");
}

let estado = "Aprovado";

switch (estado) {
  case "Aprovado":
    console.log("Aprovado");
    break;
  case "Espera":
    console.log("Espera");
    break;
  case "Reprovado":
    console.log("Reprovado");
    break;
  default:
    console.log("Não se aplica")
    break;
}
