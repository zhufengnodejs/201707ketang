export function downRefresh(element,callback) {
  let body = document.body || document.documentElement;
  let touchStart = 0;
  let touchDistance = 0;
  body.addEventListener('touchstart', function (event) {
    function touchEnd(event) {
      if (touchDistance > 50) {
        callback();
      }
      let timer = setInterval(() => {
        element.style.top = (element.offsetTop - 1) + 'px';
        if (element.offsetTop == 56)
          clearInterval(timer);
      }, 1);
      body.removeEventListener('touchmove', touchMove);
      body.removeEventListener('touchend', touchEnd);
    }
    function touchMove(event) {
      let touchY = event.targetTouches[0].pageY;
      if(touchY>touchStart){
        element.style.top = ((touchY - touchStart) + 56) + 'px';
        touchDistance = touchY - touchStart;
      }else{
        body.removeEventListener('touchmove', touchMove);
        body.removeEventListener('touchend', touchEnd);
      }
    };
    if (element.scrollTop == 0 && element.offsetTop == 56) {
      touchDistance = 0;
      touchStart = event.targetTouches[0].pageY;
      body.addEventListener('touchmove', touchMove)
      body.addEventListener('touchend', touchEnd);
    }
  })

}