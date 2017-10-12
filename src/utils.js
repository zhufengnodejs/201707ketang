export function upLoadMore(element, callback) {
  let timer;
  //增加一个事件处理函数
  element.addEventListener('scroll', (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      let scrollTop = element.scrollTop;//向上卷去的高度
      let winHeight = element.clientHeight;//可视区域的高度
      let contentHeight = element.scrollHeight;//内容区域的总高度
      if (winHeight + scrollTop + 10 >= contentHeight) {
        callback();
      }
    }, 300);
  });
}
//下拉刷新
export function downRefresh(element, callback) {
  let body = document.body || document.documentElement;
  body.addEventListener('touchstart', touchStart);
  let startY;//开始触摸的纵坐标
  let touchDistance;//滑动的总距离
  function touchStart(event) {
    //取得的是这个点距离顶部的距离
    startY = event.targetTouches[0].pageY;
    touchDistance = 0;
    body.addEventListener('touchmove', touchMove);
    body.addEventListener('touchend', touchEnd);
    function touchMove(event) {
      let pageY = event.targetTouches[0].pageY;
      if (pageY > startY) {//下拉
        element.style.top = (pageY - startY+56)+'px';
        touchDistance = pageY - startY;
      } else {
        body.removeEventListener('touchmove', touchMove);
        body.removeEventListener('touchend', touchEnd);
      }
    }
    function touchEnd(){
      let timer = setInterval(()=>{
        element.style.top = (element.offsetTop - 1)+'px';
        if(element.offsetTop == 56){
          clearInterval(timer);
        }
      },5);
      if(touchDistance>50)
        callback();
    }
  }
}
