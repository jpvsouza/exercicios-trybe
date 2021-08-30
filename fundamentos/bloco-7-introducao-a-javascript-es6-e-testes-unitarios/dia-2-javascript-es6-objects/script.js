const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const customerInfo = (order) => {
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}`;
  }
  
  console.log(customerInfo(order));
  
  // Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.
  const orderModifier = (order) => {
    order.order.delivery.payment = 50;
    order.name = 'Luiz Silva';

    return `Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é ${order.order.delivery.payment}`;
  }
  
  console.log(orderModifier(order));

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  const adicionaManha = (objeto, turno, manha) => {
      objeto.turno = manha
  }

  console.log(adicionaManha(lesson2, 'turno', 'manhã'));
  console.log(lesson2);

  // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  const listaChaves = objeto => console.log(Object.keys(objeto));
  listaChaves(lesson2);

  // Crie uma função para mostrar o tamanho de um objeto.
  const tamanhoObjeto = objeto => console.log(Object.keys(objeto).length);
  tamanhoObjeto(lesson2);

  // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
  const listaValores = objeto => console.log(Object.values(objeto));
  listaValores(lesson2);

  // Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

