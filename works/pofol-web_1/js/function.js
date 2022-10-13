const $top = document.querySelector('aside>a.top');
const $gnbs = document.querySelectorAll('header > .header_cont > nav > .gnb > li');
const $lnbs = document.querySelector('header > .header_cont > nav > .gnb > li  >.sub_container');
const $navs = document.querySelectorAll('header > .header_cont > nav');



$gnbs.forEach(function($gnb){

 
    //마우스오버 이벤트 설정
    $gnb.addEventListener('mouseenter', function(){
        this.lastElementChild.style.display = 'block';
    });
    
    //마우스아웃 이벤트 설정
    $gnb.addEventListener('mouseleave', function(){
        this.lastElementChild.style.display = 'none';
    });
});

// $navs.addEventListener('mouseenter', function(){
//     $lnbs.style.display = 'block';
// });





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


//헤더 아래 모달창 :  스크롤 올라가는걸로 바꿔야할거같은데 너무 귀찮아
{
    const $btnClose = document.querySelector('.close');
    const $modal = document.querySelector('.modal');

    $btnClose.addEventListener('click',function(){
    $modal.style.display = 'none';

    });
}

//전시 슬라이드
{
    const $container = document.querySelector('section > .cont2 > div.exhibition_slide > .exhibition_li');
    const $btnPrev = document.querySelector('.ex-navigation.prev');
    const $btnNext = document.querySelector('.ex-navigation.next');
  
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
        $container.style.left = -410*nowIdx + 'px';

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
        $container.style.left = -410*nowIdx + 'px';
    });

}


//소장품 슬라이드
{
    const $container = document.querySelector('section > .cont3 > .collection_slide > .collection_li');
    const $btnPrev = document.querySelector('.col-navigation.prev');
    const $btnNext = document.querySelector('.col-navigation.next');
  
    let nowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스 번호

    //이전버튼에 대한 클릭이벤트 구문
    $btnPrev.addEventListener('click', function(evt){
        evt.preventDefault();
 
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=1;
        }
    
        //컨테이너 이동
        $container.style.left = -410*nowIdx + 'px';

    });     
    //다음버튼에 대한 클릭이벤트 구문
    $btnNext.addEventListener('click', function(evt){
        evt.preventDefault();
    
        if(nowIdx<1){
            nowIdx++;
        }else{
            nowIdx=0;
        }    
        //컨테이너 이동
        $container.style.left = -410*nowIdx + 'px';
    });

}

//뉴스레터 슬라이드
{
    const $container = document.querySelector('section > .cont5 > div.news_slide > .news_li');
    const $btnPrev = document.querySelector('.news-navigation.prev');
    const $btnNext = document.querySelector('.news-navigation.next');
  
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
        $container.style.left = -410*nowIdx + 'px';

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
        $container.style.left = -410*nowIdx + 'px';
    });

}