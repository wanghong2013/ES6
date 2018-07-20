let firstName = 'Flowke',
    lastName= 'Hurie';

let string ='myName is ' + firstName +' ' + lastName;

console.log(string);

//模板字符串中可以直接使用变量  ${ 变量 }

//声明模板字符串使用反引号 ` `
let s = `myName is ${firstName} + ${lastName}`

console.log(s);


function fn(){

    return 'mike'
}

//模板字符串中还可以写表达式 
let str2 = ` my name is ${fn()}`
console.log( str2 );


let str3 = `my name is ${3>2?'moli':'xiaoming'}`;
console.log(str3);






