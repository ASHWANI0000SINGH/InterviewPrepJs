const animal={
  eat:true
}
const rabbit={
  walk:true
}
rabbit.__proto__=animal
console.log(rabbit.eat);