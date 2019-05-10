let timer = null;
let i = 1;
function fn1 (){
  i++;
  console.log(i);
  if(i===3){
    clearInterval(timer);
    console.log('清除了定时器')
  }
}

timer = setInterval(fn1,1000);

