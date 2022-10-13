const $header = document.querySelector('header');
const $mnus = document.querySelectorAll('header>.container>nav>.gnb>li>a');//메뉴 셀렉팅
const $top = document.querySelector('aside>a.top');

//배열은 여러 데이터를 한번에 저장, 관리
const arrTopVal = [];//각 article의 top 값 [0,1000,1845,2645,3245]


//맨처음 로딩시
let nowIdx = 0;
let oldIdx = nowIdx;


document.querySelectorAll('article').forEach(function($article, idx){
    arrTopVal[idx] = $article.offsetTop;
});

console.log('arrTopVal =',arrTopVal);


//메뉴에 대한 click 이벤트 구문
$mnus.forEach(function($mnu, idx){
    $mnu.addEventListener('click', function(evt){
        evt.preventDefault();

        //스크롤바의 top값을 설정
        window.scrollTo({top:arrTopVal[idx]-100, behavior:'smooth'});
      
    });
});


//window 객체에 대한 scroll 이벤트 구문
window.addEventListener('scroll', function(){
    
    //현재 스크롤바의 top값
    
    const scrollTop = Math.ceil(window.scrollY);//scrollTop값에 소수점이 발생했을 때 해결
    console.log(`scrollTop = ${scrollTop}`);

    //for문을 이용하여 5개의 if구문을 하나로 합침
    for(let i=0;i<$mnus.length;i++){

        if(scrollTop >= arrTopVal[i]-166){

            oldIdx = nowIdx;
            nowIdx = i;
    
            //활성화 표시
            $mnus[oldIdx].parentElement.classList.remove('on');
            $mnus[nowIdx].parentElement.classList.add('on');

        }else if(scrollTop < arrTopVal[0]-166){
            $mnus[nowIdx].parentElement.classList.remove('on');
        }
    }
});


//top 버튼에 대한 click 이벤트 구문
$top.addEventListener('click', function(evt){
    evt.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});//스크롤바의 top값을 설정
});
//로고에 대한 click 이벤트 구문
document.querySelector('.logo>a').addEventListener('click', function(evt){
    evt.preventDefault();
    $top.click();
});



{ //비주얼 슬라이드 
const $indicators = document.querySelectorAll('.navigation-button>li>a');
const $container = document.querySelector('#visual>.screen');
const $btnPrev = document.querySelector('.slides-navigation.prev');
const $btnNext =  document.querySelector('.slides-navigation.next');
const $btnPlay = document.querySelector('.slides-auto.play');
const $btnStop = document.querySelector('.slides-auto.stop');

let nowIdx = 0;
let intervalKey = null;

//자동재생 함수
const autoPlay = function(){
    clearInterval(intervalKey);//인터벌중지

    intervalKey = setInterval(function(){
        $btnNext.click();

    },3000)
};

autoPlay(); 

// 인디케이터 (파란색바)
$indicators.forEach(function($indicator,idx){
$indicator.addEventListener('click',function(evt){
    evt.preventDefault();

    //컨테이너이동
    $container.style.left = -100*idx + '%';

    //색상 바 활성화표시 + 클릭시 이동
    $indicators.forEach(function(anchor){
        anchor.parentElement.classList.toggle('on',anchor===evt.currentTarget);
    });
    
});

});

//이전 
$btnPrev.addEventListener('click',function(evt){
evt.preventDefault();

if(nowIdx >0){
    nowIdx--;
}else{
    nowIdx = 7;
}

//컨테이너이동
 $container.style.left = -100*nowIdx + '%';
 
//활성화
$indicators.forEach(function(anchor, actIdx){
    anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
});


});

//다음
$btnNext.addEventListener('click',function(evt){
    evt.preventDefault();
    
if(nowIdx<7){
nowIdx++;

}else{
    nowIdx=0;
}
$container.style.left = -100*nowIdx + '%';
//활성화
$indicators.forEach(function(anchor, actIdx){
    anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
});

    });

//자동실행   
$btnPlay.addEventListener('click',function(evt){
evt.preventDefault();

intervalKey = setInterval(function(){
    if(nowIdx<7){
        nowIdx++;
        
        }else{
            nowIdx=0;
        }
        $container.style.left = -100*nowIdx + '%';
        //활성화
        $indicators.forEach(function(anchor, actIdx){
            anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
        });

},3000);
});
$btnStop.addEventListener('click',function(evt){
    evt.preventDefault();
    clearInterval(intervalKey)
})


}


//대표관광지 슬라이드
{
    const $container = document.querySelector('section>article.cont2>.slide_list_1>.list_1');
    const $btnPrev = document.querySelector('.list1-navigation.prev');
    const $btnNext = document.querySelector('.list1-navigation.next');
  
    let nowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스 번호

    //이전버튼에 대한 클릭이벤트 구문
    $btnPrev.addEventListener('click', function(evt){
        evt.preventDefault();
 
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=4;
        }
    
        //컨테이너 이동
        $container.style.left = -250*nowIdx + 'px';

    });     
    //다음버튼에 대한 클릭이벤트 구문
    $btnNext.addEventListener('click', function(evt){
        evt.preventDefault();
    
        if(nowIdx<4){
            nowIdx++;
        }else{
            nowIdx=0;
        }    
        //컨테이너 이동
        $container.style.left = -250*nowIdx + 'px';
    });
}

//추천관광지 슬라이드
{
    {
        const $container = document.querySelector('section>article.cont2>.slide_list_2>.list_2');
        const $btnPrev = document.querySelector('.list2-navigation.prev');
        const $btnNext = document.querySelector('.list2-navigation.next');
        
        let nowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스 번호
        
        
        //이전버튼에 대한 클릭이벤트 구문
        $btnPrev.addEventListener('click', function(evt){
            evt.preventDefault();

            if(nowIdx>0){
                nowIdx--;
            }else{
                nowIdx=4;
            }
        
            //컨테이너 이동
            $container.style.left = -250*nowIdx + 'px';

        });
        
        
        //다음버튼에 대한 클릭이벤트 구문
        $btnNext.addEventListener('click', function(evt){
            evt.preventDefault();
        
            if(nowIdx<4){
                nowIdx++;
            }else{
                nowIdx=0;
            }
        
            //컨테이너 이동
            $container.style.left = -250*nowIdx + 'px';
        
        
            //활성화표시
            $indicators.forEach(function(anchor, actIdx){
                anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
            });
         
        });
    }

}

// 맛집탐방
{

    const fadeAction = function(nowIdx){
        //모든 슬라이드 숨김, 인디케이터 비활성화
        for(let i=0;i<$indicators.length;i++){
            $slides[i].style.display = 'none';
            $indicators[i].parentElement.classList.remove('on');
        }

        //해당 슬라이드 노출, 인디케이터 활성화
        $slides[nowIdx].style.display = 'block';
        $indicators[nowIdx].parentElement.classList.add('on');
};

    const $indicators = document.querySelectorAll('section>article.cont3>.food_list>.food_list_thmbs>li>a');
    const $container = document.querySelector('section>article.cont3>.food_list>.food_list_slides>.screen');
    
    $indicators.forEach(function($indicators, idx){
     $indicators.addEventListener('click',function(evt){
        evt.preventDefault();
        nowIdx=idx;
    
        //컨테이너 이동
        $container.style.left= -800*idx+ 'px';
    
        //활성화표시
        $indicators.forEach(function(){
         // $인디케이터와 겹치지 않게 다른 이름 : anchor
         anchor.parentElement.classList.toggle('on',anchor===evt.currentTarget);
        //  7.이번에 클릭한 인디케이터에 .on을 붙여서 활성화 표시.
    
        });
      });
    });
    }