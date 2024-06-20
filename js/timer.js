const to = setTimeout(() => console.log('Timeout'), 1000);

function f10() {
  let count = 1;
  () => {
    console.log('Interval', count, new Date());
  };
}

const inter = setInterval(f10, 1000);
