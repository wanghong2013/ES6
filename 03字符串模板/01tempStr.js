/*模板字符串 template strings */

'use strict';

let dessert ='三明治',
    drink = '咖啡';

/*普通字符串链接*/
//let breakfast = '今天的早餐是'+ dessert +'与' + drink+ '!';

/* 字符串模板 */

let breakfast =`今天的早餐是${dessert}与${drink} !`;

/*注意 左右便两百年的反引号是和波浪号（~）号一起的符号*/
console.log(breakfast);