const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  console.log(`Os números ${oddsAndEvens.sort()} se encontram ordenados de forma crescente`);

  const fatorial = numero => numero > 1 ? numero * (fatorial(numero - 1)) : 1;

  console.log(fatorial(5));

  const longestWord = frase => {
    let fraseArray = frase.split(' ');
    let maiorPalavra = '';
    for (let i = 0; i < fraseArray.length; i += 1) {
      if (fraseArray[i].length > maiorPalavra.length) {
        maiorPalavra = fraseArray[i];
      }
    }

    console.log(maiorPalavra);
  }

  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

  // let clickCount = 0;
  // let botao = document.getElementById('botao');
  // let p = document.getElementById('p');
  // botao.addEventListener('click', function(evento) {
  //   clickCount += 1;
  //   p.innerHTML = `Cliques no botão = ${clickCount}`;
  // })

  let fraseComX = 'Tryber x aqui!';
  const trocaX = frase => {
    let fraseDividida = fraseComX.split(" ");
    for (let i = 0; i < fraseDividida.length; i += 1) {
      if (fraseDividida[i] == 'x') {
        fraseDividida[i] = frase;
      }
    }

    console.log(fraseDividida);
  }