const promi = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'xxx');
  });

async function f1() {
  const ret = await promi();
  return ret;
}

console.log(f1());
