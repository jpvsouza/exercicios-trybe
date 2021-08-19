let estados = document.getElementById("estados");

let arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

let arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];

for (let index = 0; index < arrayTextoEstado.length; index += 1) {
  let estado = document.createElement("option");
  estado.innerHTML = arrayTextoEstado[index];
  estado.value = arraySiglaEstado[index];

  estados.appendChild(estado);
}

let botaoEnviar = document.getElementById("enviar");
botaoEnviar.addEventListener("click", validaCampos)
botaoEnviar.addEventListener("click", stop);

function stop(evento) {
  evento.preventDefault();
}

let botaoLimpar = document.getElementById("limpar");
botaoLimpar.addEventListener("click", limpaCampos);

function limpaCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estados").value = "";
  document.getElementById("resumo").value = "";
  document.getElementById("cargo").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("inicio").value = "";
}

function validaCampos() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;
  let endereco = document.getElementById("endereco").value;
  let cidade = document.getElementById("cidade").value;
  let estados = document.getElementById("estados").value;
  let resumo = document.getElementById("resumo").value;
  let cargo = document.getElementById("cargo").value;
  let descricao = document.getElementById("descricao").value;
  let inicio = document.getElementById("inicio").value;

  validaNome(nome);
  validaEmail(email);
  validaCpf(cpf);
  validaEndereco(endereco);
  validaCidade(cidade);
  validaResumo(resumo);
  validaCargo(cargo);
  validaDescricao(descricao);
  validaInicio(inicio);

  let dadosValidados = document.createElement("div");
  

  document.body.appendChild();
}

function validaNome(nome) {
  let arrayNome = nome.split("");
  if (nome == "") {
    return alert("O campo NOME não pode ser vazio!");
  }
  else if (arrayNome.length > 40) {
    return alert("O campo NOME não pode ter mais de 40 caracteres!");
  }
}

function validaEmail(email) {
  let arrayEmail = email.split("");
  if (email == "") {
    return alert("O campo EMAIL não pode ser vazio!");
  }
  else if (arrayEmail.length > 50) {
    return alert("O campo EMAIL não pode ter mais de 50 caracteres!");
  }
}

function validaCpf (cpf) {
  let arrayCpf = cpf.split("");
  if (cpf == "") {
    return alert("O campo CPF não pode ser vazio!");
  }
  else if (arrayCpf.length > 11) {
    return alert("O campo CPF não pode ter mais de 11 caracteres!");
  }
}

function validaEndereco (endereco) {
  let arrayEndereco = endereco.split("");
  if (endereco == "") {
    return alert("O campo ENDERECO não pode ser vazio!");
  }
  else if (arrayEndereco.length > 200) {
    return alert("O campo ENDERECO não pode ter mais de 200 caracteres!");
  }
}

function validaCidade (cidade) {
  let arrayCidade = cidade.split("");
  if (cidade == "") {
    return alert("O campo CIDADE não pode ser vazio!");
  }
  else if (arrayCidade.length > 28) {
    return alert("O campo CIDADE não pode ter mais de 28 caracteres!");
  }
}

function validaResumo (resumo) {
  let arrayResumo = resumo.split("");
  if (resumo == "") {
    return alert("O campo RESUMO não pode ser vazio!");
  }
  else if (arrayResumo.length > 1000) {
    return alert("O campo RESUMO não pode ter mais de 1000 caracteres!");
  }
}

function validaCargo (cargo) {
  let arrayCargo = cargo.split("");
  if (cargo == "") {
    return alert("O campo CARGO não pode ser vazio!");
  }
  else if (arrayCargo.length > 40) {
    return alert("O campo CARGO não pode ter mais de 40 caracteres!");
  }
}

function validaDescricao (descricao) {
  let arrayDescricao = descricao.split("");
  if (descricao == "") {
    return alert("O campo DESCRIÇÃO DO CARGO não pode ser vazio!");
  }
  else if (arrayDescricao.length > 500) {
    return alert("O campo DESCRIÇÃO DO CARGO não pode ter mais de 500 caracteres!");
  }
}

function validaInicio (inicio) {
  let arrayInicio = inicio.split("/");
  if (arrayInicio == "") {
    return alert("O campo INICIO não pode ser vazio")
  }
  if (arrayInicio[0] < 1 || arrayInicio[0] > 31) {
    return alert("O dia deve ser maior que 0 e menor que 31!");
  }
  else if (arrayInicio[1] < 1 || arrayInicio[1] > 12) {
    return alert("O mes deve ser maior que 0 e menor que 12!");
  }
  else if (arrayInicio[2] < 0) {
    return alert("O ano não pode ser negativo!")
  }
}