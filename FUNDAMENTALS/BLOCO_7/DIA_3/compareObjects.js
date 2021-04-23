const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

// assert.strictEqual(obj1, obj2); <-- Não funciona utilizando apenas o 'strictEqual'
// assert.strictEqual(obj2, obj1); <-- Não funciona utilizando apenas o 'strictEqual'
assert.deepStrictEqual(obj1, obj2);
assert.deepStrictEqual(obj2, obj1);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);