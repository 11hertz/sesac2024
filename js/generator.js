const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

// 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.
function* add() {
  const num1 = yield '첫 번째 수?';
  const num2 = yield '두 번째 수?';
  return num1 + num2;
}

const itAdd = add();
console.log(itAdd.next().value);
// console.log(itAdd.next().value);
// console.log(itAdd.next(1).value);
// console.log(itAdd.next(2).value);

// (실행 결과: 1과 2를 넣었을 때)
// 첫 번째 수?  → 1   next(1)
// 두 번째 수?  → 2
// 3

rl.on('line', (answer) => {
  const { value, done } = itAdd.next(+answer);
  console.log(value);
  if (done) {
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
