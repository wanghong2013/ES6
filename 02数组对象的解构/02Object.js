'use strict';

/*解构对象*/
function breakfast() {
    return {
        dessert:'三明治',
        drink:'咖啡',
        fruit:'苹果'
    }
}
let{dessert:dessert,drink:drink,fruit:fruit}=breakfast();

console.log(dessert,drink,fruit);
