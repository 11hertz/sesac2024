const itObj = {
  name: 'ABCDEFG',
  // [Symbol.iterator]() {
  //   let i = 0;
  //   return {
  //     next: () => ({
  //       value: this.name[i++],
  //       done: i > this.name.length,
  //     }),
  //   };
  // },
  *[Symbol.iterator]() {
    for (let i = 0; i < this.name.length; i += 1) {
      yield this.name[i];
    }
  },
};

const res = itObj[Symbol.iterator]();

console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());

console.log('-------------------------------');

function* genFn() {
  for (let i = 0; i < 5; i += 1) {
    yield i;
  }
}

const res2 = genFn();
console.log(res2.next());
console.log(res2.next());
console.log(res2.next());
console.log(res2.next());
console.log(res2.next());
console.log(res2.next());

function* route() {
  const start = yield '출발 역은?'; // yield가 있으므로 caller에게 제어권 넘김. yield뒤는 그냥 메시지!
  const end = yield '도착 역은?';
  return `${start}역에서 출발하여 ${end}역에 도착합니다.`;
}

const caller = route();
console.log(caller.next().value);
console.log(caller.next('문래').value);
console.log(caller.next('신림').value);
