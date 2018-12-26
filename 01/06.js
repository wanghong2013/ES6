let obj1 = {
  a:1,
  b:2,
  c:3
}

let obj2 = {
  a:2,
  b:3,
  c:4
}
//obj1 = obj2;

obj1 = Object.assign(obj1,obj2)
console.log(obj1);


//对象合并，浅拷贝