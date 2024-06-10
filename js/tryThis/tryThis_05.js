// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)
const hong = { id: 1, name: 'Hong' };
const lee = { id: 2, name: 'Lee' };
const park = { id: 3, name: 'Park' };

// 1)
function f1(user) {
  const { id, name } = user;
  console.log(id, name);
}

// 2)
const f2 = function ({ id, name }) {
  console.log(id, name);
};

// 3)
const f3 = (user) => console.log(user.id, user.name);

f1(hong);
f2(lee);
f3(park);
