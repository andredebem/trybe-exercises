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
      margherita: {
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

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  const { name, phoneNumber, address, order } = fullOrder;
  const arrayAddress = Object.values(address);
  const arrayOrder = Object.values(order);
  const deliveryName = arrayOrder[arrayOrder.length - 1];
  return `Olá ${deliveryName.deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${arrayAddress[0]}, N: ${arrayAddress[1]}, AP: ${arrayAddress[2]}.`
}

customerInfo(order);

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  fullOrder['name'] = 'Luiz Silva';
  const { name } = fullOrder;
  const { payment } = fullOrder;
  payment['total'] = 50;
  return `Olá ${name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${payment['total']},00.`
}

orderModifier(order);

// ------------------------------------ Part II

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

const addTurnoManha = (les2, key, value) => {
  les2[key] = value;
  console.log(les2);
}

addTurnoManha(lesson2, 'turno', 'manhã');