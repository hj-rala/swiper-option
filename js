/**옵션**/
preventClicks: true, //스와이프동안 클릭 방지
preventClicksPropagation: false, //스와이프동안 클릭이벤트 전파 중지

effect : 'fade', fadeEffect: { crossFade: true },  //슬라이드 fade 속성 시 크로스될때 서로 비춤 현상 제거

//swiper js display:none 상태에서 작동하지 않을 때
//display:none 요소에서 block이 될 때 슬라이드는 작동되지 않는다.
//이때 아래 옵션값을 넣어 초기화 해준다.
observer: true, //하위 요소를 수정(슬라이드 추가/제거 등)할 때마다 Swiper가 업데이트(재초기화)됩니다.
observeParents: true //상위 요소에 대한 돌연변이도 확인해야 하는 경우

//loop 일때 마지막 슬라이드 안보일때
loopAdditionalSlides: 1,

//tab or button, a 태그 있을때 포커스 앞으로 밀림
watchSlidesProgress: true,




출처: https://ranidiant.tistory.com/113 [다람쥐 코드]



___________________________________________________________
같은 클래스 siper 여러개 사용
$(".swiper-container").each(function(index, element){
    var $this = $(this);
    $this.addClass('instance-' + index);

    var swiper = new Swiper('.instance-' + index, {
        observer: true,
        observeParents: true,
        slidesPerView : 5,
        navigation: {
            nextEl: $('.instance-' + index).siblings('.swiper-button-next'),
            prevEl: $('.instance-' + index).siblings('.swiper-button-prev'),
        },
        scrollbar: {
            el: $('.instance-' + index).siblings('.swiper-scrollbar'),
            hide: false,
        },
        watchOverflow: true
    });
});
