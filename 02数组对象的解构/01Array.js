/**
 * 解构数组
 *
 * */

'use strict';


function breakfast() {
    return ['三明治','咖啡','苹果']
}

/* 以前方法处理 */
/*var tmp = breakfast(),
    dessert = tmp[0],
    drink = tmp[1],
    fruit = tmp[2];*/

/* es2015中的方法 */
let[dessert,drink,fruit] = breakfast();

console.log(dessert,drink,fruit);