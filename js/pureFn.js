const WEEKS = '일월화수목금토';
const getWeekName = (weekNo) => `${WEEKS[weekNo]}요일`;

const day = new Date().getDay();
console.log(`오늘은 ${getWeekName(day)}입니다!`);
