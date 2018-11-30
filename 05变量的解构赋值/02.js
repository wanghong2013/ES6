

// 对象的解构赋值，就是从一个对象中取出想要的值
let obj = {a:1,b:2,c:3}

let {a,b,d} = obj; //注意这里的变量名要和对象中的变量名一致

console.log(a,b,d); // 1 2 undefined