
 const $indicators = document.querySelectorAll('.slides>.slides-pagination>li>a');
 const $container = document.querySelector('.slides>.slides-container');
 const $btnPrev = document.querySelector('.slides>.slides-navigation.prev');
 const $btnNext = document.querySelector('.slides>.slides-navigation.next');
 
// 마우스오버버튼
const $mouse = document.querySelector('.stop');
const $mouseStart = document.querySelector('.start');


 //재생, 정지버튼
 const $btnPlay = document.querySelector('.slides>.slides-auto.play');
 const $btnStop = document.querySelector('.slides>.slides-auto.stop');
 
 let nowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스 번호
 let intervalKey = null;
 
 //인디케이터에 대한 클릭이벤트 구문
 $indicators.forEach(function($indicator, idx){
     $indicator.addEventListener('click', function(evt){
         evt.preventDefault();
 
         nowIdx = idx;
         
         //컨테이너 이동
         $container.style.left = -1500*nowIdx + 'px';
 
         //활성화표시
         $indicators.forEach(function(anchor, actIdx){
             anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
         });
     });
 });
 
 
 //이전버튼에 대한 클릭이벤트 구문
 $btnPrev.addEventListener('click', function(evt){
     evt.preventDefault();

     if(nowIdx>0){
         nowIdx--;
     }else{
         nowIdx=4;
     }
 
     //컨테이너 이동
     $container.style.left = -1500*nowIdx + 'px';
 
 
     //활성화표시
     $indicators.forEach(function(anchor, actIdx){
         anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
     });
 
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
     $container.style.left = -1500*nowIdx + 'px';
 
 
     //활성화표시
     $indicators.forEach(function(anchor, actIdx){
         anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
     });
  
 });
 
 
 //자동재생 버튼에 대한 click 이벤트
 $mouseStart.addEventListener('mouseover', function(){

    //  이전인터벌을제거 : 여러번 클릭했을때도 문제 없이 재생
     clearInterval(intervalKey);
 
     intervalKey = setInterval(function(){
     
         if(nowIdx<4){
             nowIdx++;
         }else{
             nowIdx=0;
         }
     
         //컨테이너 이동
         $container.style.left = -1500*nowIdx + 'px';
     
     
         //활성화표시
         $indicators.forEach(function(anchor, actIdx){
             anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
         });
      
     },2000);
 });
 
 





$mouse.addEventListener('mouseover', function(evt){
    evt.preventDefault();
    clearInterval(intervalKey);
    });

    $mouse.addEventListener('mouseout',function (){
        intervalKey = setInterval(function(){
         
            if(nowIdx<4){
                nowIdx++;
            }else{
                nowIdx=0;
            }
        
            //컨테이너 이동
            $container.style.left = -1500*nowIdx + 'px';
        
        
            //활성화표시
            $indicators.forEach(function(anchor, actIdx){
                anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
            });
         
        },2000);
      });


/*
  // 슬라이드에 마우스가 올라간 경우 루프 멈추기
  $container.addEventListener('mouseover',function (){
    clearInterval(intervalKey);
});

  
  // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
  $container.addEventListener('mouseout',function (){
    intervalKey = setInterval(function(){
     
        if(nowIdx<4){
            nowIdx++;
        }else{
            nowIdx=0;
        }
    
        //컨테이너 이동
        $container.style.left = -1500*nowIdx + 'px';
    
    
        //활성화표시
        $indicators.forEach(function(anchor, actIdx){
            anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
        });
     
    },2000);
  });

*/