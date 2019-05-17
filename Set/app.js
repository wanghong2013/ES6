/**
 * ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成 Set 数据结构。
 *
*/


/** const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));  //Set 结构不会添加重复的值
console.log(s) //Set { 2, 3, 5, 4 }
console.log(typeof s) //objuect
console.log(Array.isArray(s)) //false
for (let i of s) {
    console.log(i);
}

*/

// 二 Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

/*
const set = new Set([1, 2, 3, 4, 4, '1']);
// console.log(set)
[...set]
console.log([...set]) //[ 1, 2, 3, 4, '1' ]

*/

/*
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size) //5 会自动去重
const arr = [...items];
console.log(arr)
console.log(typeof arr)

console.log(Array.isArray(arr)) //true
*/


//列3  具有 iterable 接口的其他数据结构
/*
const set = new Set(document.querySelectorAll("li"));
console.log(set);
console.log(typeof set);
console.log(Array.isArray(set));

*/


/*
// 应用 数组去重的一种新方法
let arr = [1, 2, 3, 4, 2, 2, 34, 5, 25, 5, 23, '52', '2'];
arr = [...new Set(arr)];
console.log(arr) //[ 1, 2, 3, 4, 34, 5, 25, 23, '52', '2' ]

*/


// 应用 去除字符串里面的重复字符。

/*
let str = 'ababbc';
str = [...new Set(str)].join('');
console.log(str); //abc;
 */


/*
向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。
*/


/*
Set 实例的属性和方法
Set 结构的实例有以下属性。

Set.prototype.constructor：构造函数，默认就是Set函数。
Set.prototype.size：返回Set实例的成员总数。
Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

add(value)：添加某个值，返回 Set 结构本身。
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。
上面这些属性和方法的实例如下。
*/


/*
Array.from方法可以将 Set 结构转为数组。
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
*/

/** 数组去重的另外一种方法 */
function dedupe(array) {
  return Array.from(new Set(array));
}
dedupe([1, 1, 2, 3]) // [1, 2, 3]



/**
 *
 * 遍历操作
Set 结构的实例有四个遍历方法，可以用于遍历成员。

keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员
需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。


 *
*/