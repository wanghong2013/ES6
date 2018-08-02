const imgs = [
    'https://m.360buyimg.com/babel/jfs/t20725/33/2269042500/54736/6d12af4c/5b5025f2N49f6d7fc.png',
    'https://m.360buyimg.com/babel/jfs/t22777/161/1184009261/94747/f129992f/5b557aa2N449a9e4e.jpg',
    'https://m.360buyimg.com/babel/jfs/t23077/138/1068556447/96692/b2a6f204/5b4f19c2Ndb0ae46b.jpg'
];

var p = new Promise((resolve,reject)=>{
    let img = new Image()
    img.src = '';
    img.onload = function () {
        resolve(this)
    }
    img.onerror= function () {
        reject(new Error('图片加载失败'))
    }
})

p.then(function (resolve,reject,a=10) {
    console.log(resolve)
    console.log(a)
}).catch(function (err) {
    console.log(err)
});


