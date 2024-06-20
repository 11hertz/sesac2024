const obj = {
  name: 'ObjName',
  bark1() {
    console.log('1=', this.name);
    const self = this;
    setTimeout(function () {
      console.log('11=', self.name);
    }, 1000); // .bind(this)
    console.log('xxxx');
  },
  bark2() {
    console.log('2=', this.name);
    setTimeout(() => {
      console.log('22=', this.name);
    }, 1000);
  },
  bark3() {
    function innerFn() {
      console.log(this); // ?
    }
    innerFn();
  },
};

obj.bark1(); // vs  var x = obj.bark1;
obj.bark2();
obj.bark3();
