//可以给函数参数一个默认的值


// function fn(a,b=3){
//     console.log(a,b)

// }

// fn(1); //1,undeifined


// fn(1,7) //1,7



/**
 * 
 *  2 箭头函数 
 */

//声明的一个箭头函数

// let a =  (a,b,c=90)=>{
//      console.log(a,b,c);
//  }


//  a(1,2) //1 2 90



 //一个参数的箭头函数,如果函数只有一个参数可以不写括号

//  let b = arg =>{
//      console.log('4556')
     
//  }

//  b()



/**
 * 3 箭头后面可以直接写返回值
 */


//  let c = ()=>'455';

//  console.log(c()); //4555


// let d = (a,b) =>[1,3,a,b];

// console.log(d(3,4));//[1,3,3,4]


//如果要返回一个对象字面量要用一个括号括起来，否则它会把你当你一个函数体

// let fn = (a,c)=>({a:1,b:3,c:a,d:c})

// console.log(fn(122,'hjk'))


/**
 * 
 * 4 箭头函数的this 的指向问题 
 * 
 * this指向会是函数所在的上下文
 * 
 */


 let obj = {
     a:'123',
     fn:function(){
         console.log(this,"fn")
         let _this = this;
         let a = ()=>{
             console.log(this.a);
             console.log(this === obj) //true //this指向obj

             console.log(this === _this) //true 
         }

         a();
     }
 }


 obj.fn()


 let newFn = obj.fn;

 newFn(); //window 只是一个简单的函数