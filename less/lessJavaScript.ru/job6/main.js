const object = {
  user: '',
  name: 'John',
  surname: 'Smith',
  name: 'Pete',
}

delete object.name;

for (let serf in object) {
  console.log(serf);
}
