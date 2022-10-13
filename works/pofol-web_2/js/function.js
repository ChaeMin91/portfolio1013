const $lnbs = document.querySelector('.lnb');
const $bg_lnb = document.querySelector('.bg_lnb');
const $nav = document.querySelector('header > .menu nav');
const $gnb = document.querySelector('header > .menu nav > .gnb');
let target = document.querySelector('#dynamic');
let stringArr = ['L']


// 메인 커서 깜빡임 효과 
function blink(){
target.classList.toggle("active");
}
setInterval(blink,500);



//메뉴
    const navDropD = function(){
        $bg_lnb.style.top = 0 + 'px'; 

        $gnb.children[0].style.left= -4 + '%';
        // $gnb.children[1].style.left= 180 + '%';
        $gnb.children[2].style.left= 53 + '%';


    };

    const navDropUp = function(){
        $bg_lnb.style.top = -350 + 'px';
        $gnb.children[0].style.left= 0 + '%';
        // $gnb.children[1].style.width= 112 + 'px';
        $gnb.children[2].style.left= 49 + '%';

    };


    $nav.addEventListener('mouseleave', function(){
        navDropUp();   
 
    });

    $bg_lnb.addEventListener('mouseover', function(){
        navDropD();
     

        
    });

    $bg_lnb.addEventListener('mouseout', function(){
        navDropUp();   
        

    });

    $gnb.addEventListener('mouseenter',function(){
        navDropD();
        setTimeout(function(){
            $bg_lnb.children[0].style.left = 40 + '%';
            $bg_lnb.children[2].style.left = 62 + '%';

            $bg_lnb.children[0].style.width = 10 + '%';
            $bg_lnb.children[1].style.width = 12 + '%';
            $bg_lnb.children[2].style.width = 10 + '%';
        },400);

    });




// //top 버튼에 대한 click 이벤트 구문
// $top.addEventListener('click', function(evt){
//     evt.preventDefault();
//     window.scrollTo({top:0, behavior:'smooth'});//스크롤바의 top값을 설정
// });
// //로고에 대한 click 이벤트 구문
// document.querySelector('.logo>a').addEventListener('click', function(evt){
//     evt.preventDefault();
//     $top.click();
// });


// $bg_lnb.children[0].style.left = 42.2 + '%';
// $bg_lnb.children[2].style.left = 59.5 + '%';

// $bg_lnb.children[0].style.width = 169 + 'px';
// $bg_lnb.children[1].style.width = 169 + 'px';
// $bg_lnb.children[2].style.width = 150 + 'px'; 이프문을쓰든지해야댐.

/* setTimeout(function(){
            $bg_lnb.children[0].style.left = '';
            $bg_lnb.children[2].style.left = '';

            $bg_lnb.children[0].style.width = '';
            $bg_lnb.children[1].style.width = '';
            $bg_lnb.children[2].style.width = '';
        },400);
        
        이프문을 쓰든지 해야댐..
        */ 