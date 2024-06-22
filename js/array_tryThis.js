const assert = require('assert');

const arr = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
const testArr1 = arr.slice(1, 3);
console.log(testArr1);
assert.deepStrictEqual(testArr1, [2, 3], 'not equal');

// ex2) [3]부터 모두 다 추출
const testArr2 = arr.slice(2);
console.log(testArr2);
assert.deepStrictEqual(testArr2, [3, 4, 5], 'not equal');

// ex3) [2,3,4] 제거하기
const testArr3 = arr.splice(1, 3);
console.log(testArr3); // []
assert.deepStrictEqual(testArr3, [2, 3, 4], 'not equal');

// ex4) 복원하기
const testArr4 = arr.splice(1, 0, 2, 3, 4);
console.log(testArr4); // []
console.log(arr); // [1, 2, 3, 4, 5]
assert.deepStrictEqual(arr, [1, 2, 3, 4, 5], 'not equal');

// ex5) [3] 부터 끝까지 제거하기
const testArr5 = arr.splice(2);
console.log(arr); // [1, 2]
console.log(testArr5); // [3, 4, 5]
assert.deepStrictEqual(arr, [1, 2], 'not equal');

// ex6) 복원하기
const testArr6 = arr.splice(2, 0, 3, 4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
console.log(testArr6); // [3, 4, 5]
assert.deepStrictEqual(arr, [1, 2, 3, 4, 5], 'not equal');

// ex7) [1, 2, 'X', 'Y', 'Z', 4, 5] 만들기
const testArr7 = arr.splice(2, 1, 'X', 'Y', 'Z');
console.log(arr); // [1, 2, 'X', 'Y', 'Z', 4, 5]
console.log(testArr7); // [3]
assert.deepStrictEqual(arr, [1, 2, 'X', 'Y', 'Z', 4, 5], 'not equal');

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
