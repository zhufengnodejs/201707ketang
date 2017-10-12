export function upLoadMore(element, callback) {
  let timer;
  //增加一个事件处理函数
  element.addEventListener('scroll', (event) => {
    if(timer)clearTimeout(timer);
    timer = setTimeout(()=>{
       let scrollTop = element.scrollTop;//向上卷去的高度
       let winHeight = element.clientHeight;//可视区域的高度
       let contentHeight = element.scrollHeight;//内容区域的总高度
       if (winHeight + scrollTop + 10 >= contentHeight) {
         callback();
       }
     },300);
  });
}