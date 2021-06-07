const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947() {
  const result = books.find(({ author }) => (author.birthYear === 1947));
  const { author: { name } } = result;
  return name;
};

function smallestName() {
  let nameBook = 'As Crônicas de Gelo e Fogo';
  books.forEach(({ name }) => {
    if (name.length < nameBook.length) {
      nameBook = name;
    } else {};
  });
  return nameBook;
};

function bookName26Charac() {
  const result = books.find(({ name }) => (name.length === 26));
  const { name } = result;
  return name;
};

function everyoneWasBornOnSecXX() {
  const result = books.every(({ author: { birthYear } }) => (birthYear > 1900 && birthYear <= 2000));
  return result;
};

function someBookWasReleaseOnThe80s() {
  const result = books.some(({ releaseYear }) => (releaseYear > 1980 && releaseYear <= 1990));
  return result;
};

assert.strictEqual(authorBornIn1947(), 'Stephen King');
assert.strictEqual(smallestName(), 'Duna');
assert.strictEqual(bookName26Charac(), 'As Crônicas de Gelo e Fogo');
assert.strictEqual(everyoneWasBornOnSecXX(), false);
assert.strictEqual(someBookWasReleaseOnThe80s(), true);