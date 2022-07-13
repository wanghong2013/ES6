/**
 * Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
 *

  语法：const p = new Proxy(target, handler)
参数:

target:要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
handler:一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

通过Proxy，我们可以对设置代理的对象上的一些操作进行拦截，外界对这个对象的各种操作，都要先通过这层拦截。（和defineProperty差不多）

*/

let person = {
  age: 0,
  school: '洗点',
};

let handler = {
  get(obj, key) {
    return key in obj ? obj[key] : undefined;
  },
  set(obj, key, val) {
    obj[key] = val;
    return true;
  },
};

let proxyObj = new Proxy(person, handler);
console.log(proxyObj.age, 'age');
console.log(proxyObj.school, 'school');
console.log(proxyObj.name, 'name');
