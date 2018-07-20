//传统类的声明以及定义

/** 
function Human(){
    this.eyes = 2;
    this.hands= 2;
}

Human.prototype.singing = function(){
    console.log('I can singing');
}
let a = new Human();

console.log(a);

a.singing();

*/


//es6中类的声明---------------


//使用class关键字去声明类 
class Human{
    //类的构造函数 ，初始化一个对象的属性
    constructor(eyes=2,hands=2){
        this.eyes = eyes;
        this.hands= hands;
    }

    singing(){
        console.log('I can singing');
    }
}
   
let a = new Human(3,4);

console.log(a);

a.singing();



//类的可以继承另外一个类，使用extends 方法

//可以继承到另外一个类的所有属性和方法，可以重写父类继承过来的方法

class NoramlMan extends Human{
    constructor(name='Flowke'){
        super(1000,2000) //调用一下父类的构造函数 
        //当你继承了另外一个类的时候，必须用super()
        // this.eyes = 100;
        // this.hands= 2;
        this.feet = 6;
        this.name = name;
        this.singing = this.singing.bind(this)
    }

    singing(){
        console.log(this);
        console.log(`${this.name} can singing`);
    }

    run(){
        console.log('1223')
    }
}

let b = new NoramlMan('wh');

console.log(b);

b.singing();



//关于类里面方法的指向

let c = new NoramlMan('wangh');

c

let fnn = b.singing; //此时会报错。解决办法就是在类NormalMan中改变this的执向
