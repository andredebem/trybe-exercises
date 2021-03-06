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

const keyObj = (object) => {
  console.log(Object.keys(object));
}

keyObj(lesson3);

const valuesObj = (object) => {
  console.log(Object.values(object));
}

valuesObj(lesson1);

const allLessons = {};

const agroupAllLessons = (les1, les2, les3) => {
  const lessons = {
    lesson1: les1,
    lesson2: les2,
    lesson3: les3
  };
  Object.assign(allLessons, lessons);
}

agroupAllLessons(lesson1, lesson2, lesson3);
console.log(allLessons);

const numberOfStudents = (allLessonsObj) => {
  let numberFinal = 0;
  Object.values(allLessonsObj).forEach((lesson) => {
    const { numeroEstudantes } = lesson;
    numberFinal += numeroEstudantes;
  })
  console.log(numberFinal);
}

numberOfStudents(allLessons);

const valueByPosition = (lesson, position) => {
  console.log(Object.values(lesson)[position]);
}

valueByPosition(lesson1, 0);

const verifyPair = (lesson, key, value) => {
  const entriesLesson = Object.entries(lesson);
  const result = entriesLesson.some((pair) => pair[0] === key && pair[1] === value);
  console.log(result);
}

verifyPair(lesson3, 'materia', 'Maria Clara');
verifyPair(lesson2, 'numeroEstudantes', 20);