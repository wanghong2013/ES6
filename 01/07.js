let obj1 = {
  state: 1,
  currentPlayer: {
    id: 129929292,
    nick_name: '张三',
    integral_account: 120000,
    avatar_url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1665110666,1033370706&fm=27&gp=0.jpg',
    card_id: 0,
    isOnLine: true,
    rush_state: -1,
  },
  nextPlay: {
    id: 500000,
    nick_name: '李思思',
    integral_account: 15000,
    avatar_url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1665110666,1033370706&fm=27&gp=0.jpg',
    card_id: 1,
    isOnLine: true,
    rush_state: -1,
  },
  prevPlay: {
    id: 80000,
    nick_name: '辛弃疾',
    integral_account: 8000000,
    avatar_url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1665110666,1033370706&fm=27&gp=0.jpg',
    card_id: 2,
    isOnLine: true,
    rush_state: -1,
  },
  playerCards: [
    [54, 53, 2, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 17, 3, 16],
    [54, 53, 2, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 17, 3, 16],
    [54, 53, 2, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 17, 3, 16]
  ],
  bottomCards: [
    23, 40, 45
  ],
  turnPlayerId: 129929292,
  landowner: -1,
};
let obj2 = {
  state: 1,
  currentPlayer: {
    id: 129929292,
    nick_name: '张三',
    integral_account: 120000,
    avatar_url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1665110666,1033370706&fm=27&gp=0.jpg',
    card_id: 0,
    isOnLine: true,
    rush_state: -1,
  },
  nextPlay: {
    id: 500000,
    nick_name: '李思思',
    integral_account: 15000,
    avatar_url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1665110666,1033370706&fm=27&gp=0.jpg',
    card_id: 1,
    isOnLine: true,
    rush_state: -1,
  },
  prevPlay: {
    id: 80000,
    nick_name: '辛弃疾',
    integral_account: 8000000,
    avatar_url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1665110666,1033370706&fm=27&gp=0.jpg',
    card_id: 2,
    isOnLine: true,
    rush_state: -1,
  },
  playerCards: [
    [54, 53, 2, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 17, 3, 16],
    [54, 53, 2, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 17, 3, 16],
    [54, 53, 2, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 17, 3, 16]
  ],
  bottomCards: [
    23, 40, 45
  ],
  turnPlayerId: 129929292,
  landowner: -1,
};
let obj3 = {
  a: 1
}
let obj4 = {
  a: 1
}

 
function deepCompare(x, y) {
  let  i, l, leftChain, rightChain;

  function compare2Objects(x, y) {
      var p;

      // remember that NaN === NaN returns false
      // and isNaN(undefined) returns true
      if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
          return true;
      }

      // Compare primitives and functions.     
      // Check if both arguments link to the same object.
      // Especially useful on the step where we compare prototypes
      if (x === y) {
          return true;
      }

      // Works in case when functions are created in constructor.
      // Comparing dates is a common scenario. Another built-ins?
      // We can even handle functions passed across iframes
      if ((typeof x === 'function' && typeof y === 'function') ||
          (x instanceof Date && y instanceof Date) ||
          (x instanceof RegExp && y instanceof RegExp) ||
          (x instanceof String && y instanceof String) ||
          (x instanceof Number && y instanceof Number)) {
          return x.toString() === y.toString();
      }

      // At last checking prototypes as good as we can
      if (!(x instanceof Object && y instanceof Object)) {
          return false;
      }

      if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
          return false;
      }

      if (x.constructor !== y.constructor) {
          return false;
      }

      if (x.prototype !== y.prototype) {
          return false;
      }

      // Check for infinitive linking loops
      if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
          return false;
      }

      // Quick checking of one object being a subset of another.
      // todo: cache the structure of arguments[0] for performance
      for (p in y) {
          if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
              return false;
          } else if (typeof y[p] !== typeof x[p]) {
              return false;
          }
      }

      for (p in x) {
          if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
              return false;
          } else if (typeof y[p] !== typeof x[p]) {
              return false;
          }

          switch (typeof(x[p])) {
              case 'object':
              case 'function':

                  leftChain.push(x);
                  rightChain.push(y);

                  if (!compare2Objects(x[p], y[p])) {
                      return false;
                  }

                  leftChain.pop();
                  rightChain.pop();
                  break;

              default:
                  if (x[p] !== y[p]) {
                      return false;
                  }
                  break;
          }
      }

      return true;
  }

  if (arguments.length < 1) {
      return true; //Die silently? Don't know how to handle such case, please help...
      // throw "Need two or more arguments to compare";
  }

  for (i = 1, l = arguments.length; i < l; i++) {

      leftChain = []; //Todo: this can be cached
      rightChain = [];

      if (!compare2Objects(arguments[0], arguments[i])) {
          return false;
      }
  }

  return true;
}


console.log(deepCompare(obj1,obj2))