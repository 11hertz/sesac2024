const user = {
  '': 1,
  ' ': 1,
  123: 1,
  '12345n': 2,
  true: 1,
  id: 2,
  [`name`]: 'Hong',
  [Symbol()]: 'HongSym()',
  [`${new Date()}`]: 365,
  'my-friends': ['Han', 'Kim'],
  getInfox: () => `${this.id}-${this.name}`,
  getInfo() {
    return `${this.id}-${this.name}`;
  },
};

console.log(user);
console.log(Object.keys(user));
console.log(Reflect.ownKeys(user));
console.log(user['true'], user.name);

for (const k of Reflect.ownKeys(user)) {
  if (typeof k === 'symbol') console.log(user[k]);
}

const sym = Symbol('sym');
user[sym] = 'HongSym2';
console.log('sym : ', user[sym]);

console.log(user.hasOwnProperty('id'));
console.log(Reflect.has(user, 'id'));

console.log('values', Object.values(user));
console.log('entries', Object.entries(user));

console.log('id' in user);

console.log(Object.getOwnPropertyDescriptor(user, 'id'));
// console.log(Object.getOwnPropertyDescriptors(user));
Object.defineProperty(user, 'id', { value: 3, writable: false, enumerable: false });
user.id = 555;
console.log(user.id);

const map = new Map([
  ['id', 1],
  ['name', 'hong'],
]);
console.log(map);

const hong = Object.fromEntries(map);
console.log('hong :', hong);

Object.assign(hong, user);
console.log('hong :', hong);

// Object.create는 prototype에!!
console.log('------------------------------');
const u1 = Object.assign({}, user);
const u2 = { ...user };
const u3 = new Object(user);
const u4 = Object.create(user);
// const u4 = Object.create({}, { p: { value: 42 }, q: { value: 55 } });
console.log('u1=', u1, user === u1);
console.log('u2=', u2, user === u2);
console.log('u3=', u3, user === u3); // true!!
console.log('u4=', u4, user === u4);
console.log('u4.proto=', Object.getPrototypeOf(u4));
