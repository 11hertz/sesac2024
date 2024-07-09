const x = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('xxx');
    resolve('OK');
  }, 1000);
});

x.then((ret) => console.log('ret =', ret));

class promiseX {
  constructor(pfn) {
    pfn(this.resolve, this.reject);
  }

  then(cb, rj) {
    // this.cb = cb;
    // this.pfns.push(cb);
    // return Promise.resolve(cb); // 1
    return new Promise(cb, rj);
  }

  catch(f) {
    this.catch = f;
  }

  resolve(val) {
    let x = val;
    for (const cb of this.thenfns) {
      x = cb(x);
    }
  }

  reject(err) {
    if (this.catch) this.catch(err);
  }
}
