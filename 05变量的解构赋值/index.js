//基本概念

/**
 * 
 * 本质上就是一种匹配模式 那么左边的变量就可以被赋予对应的只
 * 
 * 解构赋值主要分为：
 * 1 数组的解构赋值
 * 2 对象的解构赋值
 * 3 基本类型的解构赋值
 * 
 */

 //null 和 undefined 不能解构赋值

 //以前

//  let a = 1;
//  let b = 2;
//  let c = 3;

 //可以为如下

 //let [a,b,c] = [1,2,3];

// console.log(a,b,c);  //1 2 3
//---------------------------------------------------------------------------
 //1 数组的解构赋值

// let [a,[[b],c]] = [1,[[2],3]];
// console.log(a,b,c);


//let [ , , c] = [1,2,3];

//console.log(c); //3


// let [x] = [];

// console.log(x) ;  // let x ;undefined 


// let  [ y = 1] = [];  //指定默认值 

// console.log(y)  //1


// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]


// var [a, ...b] = [1, 2, 3];
// console.log(a); // 1
// console.log(b); // [2, 3]

 //---------------------------------------------------------------------------
 //2对象的解构赋值

/**
 * 对象的解构赋值和数组的有一定的区别，数组的元素是按照顺序排列的
 * 对象必须是同名的属性才能够取到值
 * 
 */ 

 //变量名和属性名一致
//  let {a ,b } = {b:'bb',a:'aaa'}

//  console.log(a,b)  //aaa bb

 //变量名和属性名不一致

// let {a : b} = { a : 1}

// console.log(b)  //1

// console.log(a)  //报错a is not defined







  //---------------------------------------------------------------------------
 //3基本类型的解构赋值

//字符串的解构赋值

// let [a,b,c,d] = '1234';
// console.log(a,b,c,d)


// let {length:len} = 'miaov';
// console.log(len); //5


// let {toString:ts} =1 ;

// let {toString:bs} = true;
// console.log(ts) //ƒ toString() { [native code] }
// console.log(bs)  // ƒ toString() { [native code] }


// console.log(ts === Number.prototype.toString)  //true

// console.log(bs === Boolean.prototype.toString)  //true



//案例 

//以前变量的赋值
let obj = {
  firstName:'Mike',
  lastName:'json',
  hj:{
    a:1,
    b:2
  }
}

// let f = obj.firstName,
//   l = obj.lastName

//let {firstName:f,lastName:l} = obj  //格式 赋值属性：要赋值的变量

//简化

// let {firstName,lastName} = obj;

// console.log(`${firstName} ${lastName}`)

//let {hj} = obj;

// console.log(hj); //{a:1,b:2}

//嵌套的解构
// let {hj:{a,b},hj} = obj;

// console.log(a,b,hj) //1,2




// function logNames(obj){
//   console.log(`${ obj.firstName} ${obj.lastName}`)
// }



//在函数参数里面可以直接解构
function logNames({firstName,lastName},n){
  console.log(`${ firstName} ${lastName} ${n}`) //a b
}


logNames({firstName:'a',lastName:'b'},880);