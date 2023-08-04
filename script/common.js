//header, footer JS 작성 위치 common=통합
//header 전체 메뉴 스크립트 flow
//1. open-nav 초기 숨기기
//2. 햄버거 메뉴(nav) 클릭스 open-nav 출력
//3. open-nav 안 x 버튼(nav-close) 클릭시 open-nav 숨기기
const nav = document.querySelector('#menu')//햄버거 메뉴
const open_nav = document.querySelector('#open_nav')//nav클릭시 오픈
const nav_close = document.querySelector('#nav_close')//x닫기
console.log(nav, open_nav, nav_close)
//-----------------------------------------------------------------------------------
//1. open-nav 초기 숨기기 #open_nav {transform:}
open_nav.style.transform='translateX(100%)'; //애니메이션 효과주기 위해 사용 
// open_nav.style.display = 'none';//방법1

//css  상태에 따라 변경이 일어날 경우 애니메이션 transition
open_nav.style.transition = 'transform 1s ease'
/*---------------------------------------------------------------------------------*/
//2. 햄버거 메뉴(nav) 클릭스 open-nav 출력
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)';
    // open_nav.style.display = 'block'//방법1

    //display:none 숨긴 대상을 다시 보이게 할경우
    //기존 디자인 css 에서 flex로 정렬한 대상이라면 display='flex'으로 표기한다.
    //기존 디자인 css 에서 flex설정이 없엇다면 display='block'으로 표기 한다.
})
/*---------------------------------------------------------------------------------*/
//3. open-nav 안 x 버튼(nav-close) 클릭시 open-nav 숨기기
//포지션 으로 위치를 잡아서 x를 눌러도 밑에있는 다른게 선택되어 눌리지 않을 
//경우z-index를 높이면 됨
nav_close.addEventListener('click',function(){
    // open_nav.style.display = 'none';//방법1
    open_nav.style.transform = 'translateX(100%)';

})
// swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delat:1000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#nav_adver .swiper-button-prev',
    }
});