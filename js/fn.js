function Dogf(name) {
  this.name = name;
}
const lucy = {};
Dogf.bind(lucy)('Lucy');
lucy.constructor = Dogf;
lucy.constructor('LUCY');
console.log('lucy : ', lucy);

const x = new Dogf('xxx');
console.log('x', x);

class Dog {
  constructor(name) {
    this.name = name;
  }
}

function fx() {
  console.log('fx.name = ', name);
}

fx();
