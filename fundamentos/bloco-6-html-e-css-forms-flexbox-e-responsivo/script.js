let estados = document.getElementById("estados");

let arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

let arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];

for (let index = 0; index < arrayTextoEstado.length; index += 1) {
  let estado = document.createElement("option");
  estado.innerHTML = arrayTextoEstado[index];
  estado.value = arraySiglaEstado[index];

  estados.appendChild(estado);
}

let botao = document.getElementById("enviar");

botao.addEventListener("click", stop);

function stop(evento) {
  evento.preventDefault();
}

