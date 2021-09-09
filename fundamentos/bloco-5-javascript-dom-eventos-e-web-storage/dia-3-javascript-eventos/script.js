createDaysOfTheWeek();
createMonth();
criaBotaoFeriado();
criaBotaoSexta();
zoom();
mostraFeriado();
mostraSexta();
tarefa("cozinhar");
tarefa("lavar louça");
tarefa("fazer janta");


function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
function createMonth() {
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysList = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index +=1) {
    let dia = dezDaysList[index];
    let todosDias = document.createElement("li");
    todosDias.innerHTML = dia;
    todosDias.className = "day";

    if (dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31) {
      todosDias.className += " holiday";
    }
    if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18 || dezDaysList[index] == 25) {
      todosDias.className += " friday";
    }


    daysList.appendChild(todosDias);
  }
}

function criaBotaoFeriado() {
  let botao = document.createElement("button");
  botao.id = "btn-holiday";
  botao.innerHTML = "Feriados"

  let div = document.querySelector(".buttons-container");
  div.appendChild(botao);
}

function criaBotaoSexta(Sexta) {
  let botao = document.createElement("button");
  botao.id = "btn-friday";
  botao.innerHTML = "Sextas";

  let div = document.querySelector(".buttons-container");
  div.appendChild(botao);
}

function zoom() {
  let amplia = document.querySelectorAll(".day");
  for (index = 0; index < amplia.length; index += 1) {
    amplia[index].addEventListener("mouseover", function(evento) {
      evento.target.style.fontSize = "30px";
    })
    amplia[index].addEventListener("mouseleave", function(evento) {
      evento.target.style.fontSize = "";
    })
  }
}

function tarefa(nomeDaTarefa) {
  let novaTarefa = document.createElement("span");
  novaTarefa.innerHTML = nomeDaTarefa + "<br>";
  let div = document.querySelector(".my-tasks");
  div.appendChild(novaTarefa);
}

function mostraFeriado() {
  let botao = document.querySelector("#btn-holiday");
  botao.addEventListener("click", function(){
    let feriado = document.querySelectorAll(".holiday");
    for (let index = 0; index < feriado.length; index +=1) {
      if (feriado[index].style.backgroundColor === "") {
        feriado[index].style.backgroundColor = "red";
      }
      else {
        feriado[index].style.backgroundColor = "";
      }
    }
  })
}

function mostraSexta() {
  let botao = document.querySelector("#btn-friday");
  botao.addEventListener("click", function() {
    let sextas = document.querySelectorAll(".friday");
    for (let index = 0; index < sextas.length; index += 1) {
      if (sextas[index].style.backgroundColor === "") {
        sextas[index].style.backgroundColor = "blue";
      }
      else {
        sextas[index].style.backgroundColor = "";
      }
      
    }
  })
}





