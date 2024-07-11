const promi = (val) =>
  new Promise((resolve) => {
    setTimeout(resolve, val * 1000);
  });

function* gener() {
  const r1 = yield promi(1);
  const r2 = yield promi(r1);
  return r1 + r2;
}

// async function gener() { await promi() ... }

const g = gener();
const { value: ret1 } = g.next();
console.log('ret1 :', ret1);

ret1
  .then((r) => {
    console.log('r : ', r);
    const { value: ret2 } = g.next();
    console.log('ret2 : ', ret2);
    return ret2;
  })
  .then((rrr2) => {
    console.log(console.log('rrr2 : ', rrr2));
    const result = g.next(rrr2);
    console.log(result);
  });
