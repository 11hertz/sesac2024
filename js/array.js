function isOdd(n) {
  let ret = false;
  if (n % 2 === 1) return true;
  console.log(n, ret);
}

const isEven = (n) => n % 2 === 0;

const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  isOdd(val);
}

arr.forEach((val) => isOdd(val));
arr.forEach(isOdd);
