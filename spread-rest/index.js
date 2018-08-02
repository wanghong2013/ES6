/**
 * 
 * spead 和 reset 的都是 ...符号
 * 
 */

//spread 展开

//展开数组

// function fn(a,b,c){
//     console.log(a,b,c);
// }


//fn(1,2,3); //1,2,3

//let arr= [1,2,3]

//fn(arr);//[1, 2, 3] undefined undefined

//在函数参数里面展开一个数组 
//fn(...arr) // 1,2,3 展开了数组 会把第一个元素

//在数组里展开数组
//console.log(['a','b',...arr]); // ["a", "b", 1, 2, 3]

//展开一个对象

    // let obj = { a:1 ,b:3,c:30}

    // console.log(
    //     {
    //         c:20, //这里的c值会被 obj中的c的值覆盖 
    //         name:'sjdlak',
    //         ...obj
    //     } //{name: "sjdlak", a: 1, b: 3}
    // )
//这里要注意如果前面有值，在展开的时候会覆盖值 ，以最后的值为准 





//-------------------------------------------------------------------
/**
 * //rest 剩余  语法还是...
 */


 //在函数形参里使用rest
//  function fun2(a,dd,...b){ //这里..b代表剩余的参数 
//     console.log(a,dd,b)
//  }

//  fun2(1,2,3,4); //1 2 (2) [3, 4]



//在解构对象的时候使用 rest
//  let obj3 = {a:1,b:2,c:3,d:4}


//  let {a,b, ...g} = obj3;
 
//  console.log(a,b,g); //1 2 {c: 3, d: 4} //g 就是没有被解构出来剩余的




//数组展开赋值

let arr = [1,2,3];
let arr2 = [...arr,4];
console.log(arr2)