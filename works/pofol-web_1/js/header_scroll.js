var lastScrollTop = 0;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop(); /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 수직 위치를 정합니다. */
        // scrollTop - 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정하는 메소드
    
    if(scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
        if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
            /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
            $("header").css({
                "top":"-140px",
                "height":"190px"
            });
            $(".gnb").css({
                "justify-content":"center",
                "height" : "71px",
                "line-height" :"91px"
            });
            $(".logo").css({
                "width":"310px",
                "position":"relative",
                "top":"110px"

            });
            $(".logo>a").css({
                "width":"50px",
                "height" : "50px",
                "background-size" : "cover"
            });
            $(".sub_container>.sub>.lnb").css(
                "justify-content","center"
            );
            $(".sub_container").css({
                "height" : "70px",
                "line-height" :"52px",
                "top" : "172px"
          });
            


        } else {
            $("header").css({
                "top":"0px",
                "height":"202px"
            });
            $(".gnb").css({
                "justify-content":"start",
                "height" : "60px",
                "line-height" :"60px"
            
            });
            $(".logo").css({
                "position":"initial",
                "top":"0px"
            });
            $(".logo>a").css({
                "width": "310px",
                "height" : "72px"
            });
            $(".sub_container>.sub>.lnb").css(
                "justify-content","start"
            );
            $(".sub_container").css({
                "top" : "183px"
          });
        }

        lastScrollTop = scrollTop;
    } 

});