const user = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };
user.addr.city = 'Busan';

const cpUser = { ...user };

console.log(user);
