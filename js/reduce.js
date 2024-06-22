const assert = require('assert');

const objs = [{ id: 1 }, { name: 'Hong' }, { addr: 'Seoul', id: 5 }];
//⇒⇒⇒ {id: 5, name: 'Hong', addr: 'Seoul'}

const obj = objs.reduce((acc, user) => ({ ...acc, ...user }), {});

console.log(obj);

// assert.deepStrictEqual(obj, { id: 5, name: 'Hong', addr: 'Seoul' });
