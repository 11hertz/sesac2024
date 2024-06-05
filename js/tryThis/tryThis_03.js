// 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
// const today = new Date();  today.getDay(); // 요일번호
// 오늘은 금요일입니다.  (const WEEK_NAMES = '일월화수목금토')
const today = new Date().getDay();
const WEEK_NAMES = '일월화수목금토';

// 1) use switch
const printDate = (today) => {
  let date = '';
  switch (today) {
    case 0:
      date = '일';
      break;
    case 1:
      date = '월';
      break;
    case 2:
      date = '화';
      break;
    case 3:
      date = '수';
      break;
    case 4:
      date = '목';
      break;
    case 5:
      date = '금';
      break;
    case 6:
      date = '토';
      break;
  }
  return `오늘은 ${date}요일입니다.`;
};

const res = printDate(today);
console.log(res);

// 2) not use switch
const printDate2 = (today) => `오늘은 ${WEEK_NAMES[today]}요일입니다.`;
const res2 = printDate2(today);
console.log(res2);
