const greetPeople = (people) => {
    let greeting = 'Hello ';
    let array = [];
    for (let index = 0; index < people.length; index += 1) {
      array[index] = `${greeting}${people[index]}`;
    }
    return array;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  const assert = require('assert');

  assert.strictEqual(typeof greetPeople, 'function', 'GreetPeople não é uma função');
  assert.strictEqual(result, greetPeople(parameter), 'O resultado de greeting não é o esperado');