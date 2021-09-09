// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (empregado) => {
    const employees = {
      id1: empregado('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: empregado('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: empregado('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  function empregado (nome) {
      let objeto = {
        nomeCompleto: `${nome}`,
        email: `${nome}@trybe.com`,
      }
      return objeto;
  }

  console.log(newEmployees(empregado));

  const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach(showEmailList);

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verificar = (numero) => numero % 3 == 0 && numero % 5 == 0;

const findDivisibleBy3And5 = () => numbers.find(verificar);

console.log(findDivisibleBy3And5())

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const ver = (nome) => nome.length == 5;

const findNameWithFiveLetters = () => names.find(ver);

console.log(findNameWithFiveLetters());


// // 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   // Adicione seu código aqui
// }

// console.log(findMusic('31031685'))

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
