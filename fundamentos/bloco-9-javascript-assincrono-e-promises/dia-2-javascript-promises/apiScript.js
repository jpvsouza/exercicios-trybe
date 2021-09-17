// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => adicionaPiada(data))
};

const adicionaPiada = (piada) => {
    let h2 = document.getElementById('jokeContainer');
    h2.innerHTML = piada.joke;
}


const promise = new Promise((resolve, reject) => {
    let array = [];
    for (let index = 0; index < 10; index += 1) {
        array[index] = Math.pow((Math.random() * 50), 2);
    }
    const soma = array.reduce((acc, num) => acc + num, 0);
    if (soma >= 8000) {
        return 'É mais de oito mil! Essa promise deve estar quebrada!'
    }
    resolve(soma)
})
.then (arrayNovo(numero))
.catch(console.log(mensagem))

const arrayNovo = soma => [2, 3, 5, 10].map(numero => soma / numero).reduce((acc, elemento) => acc + elemento);

window.onload = () => fetchJoke();
