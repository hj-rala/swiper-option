/**옵션**/
preventClicks: true, //스와이프동안 클릭 방지
preventClicksPropagation: false, //스와이프동안 클릭이벤트 전파 중지
observer: true, //하위 요소를 수정(슬라이드 추가/제거 등)할 때마다 Swiper가 업데이트(재초기화)됩니다.
observeParents: true //상위 요소에 대한 돌연변이도 확인해야 하는 경우





// 스와이퍼 클릭 시 가운데 정렬 (** mobile 이상없음/pc는 마우스 스크롤 삐걱거림)
function mymapSwiper() {
  mymapSwiper = new Swiper(".mymap-tabs-swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    preventClicks: true, //스와이프동안 클릭 방지
    preventClicksPropagation: false, //스와이프동안 클릭이벤트 전파 중지
    observer: true, //하위 요소를 수정(슬라이드 추가/제거 등)할 때마다 Swiper가 업데이트(재초기화)됩니다.
    observeParents: true, //상위 요소에 대한 돌연변이도 확인해야 하는 경우
  });

  var $snbSwiperItem = $(".mymap-tabs-swiper .mymap-tabs-btn");
  $snbSwiperItem.click(function () {
    var target = $(this).parent();
    $snbSwiperItem.parent().removeClass("on");
    target.addClass("on");
    muCenter(target);
  });

  function muCenter(target) {
    var snbwrap = $(".mymap-tabs-swiper .swiper-wrapper");
    var targetPos = target.position();
    var box = $(".mymap-tabs-swiper");
    var boxHarf = box.width() / 2;
    var pos;
    var listWidth = 0;

    snbwrap.find(".swiper-slide").each(function () {
      listWidth += $(this).outerWidth();
    });

    var selectTargetPos = targetPos.left + target.outerWidth() / 2;
    if (selectTargetPos <= boxHarf) {
      // left
      pos = 0;
    } else if (listWidth - selectTargetPos <= boxHarf) {
      //right
      pos = listWidth - box.width();
    } else {
      pos = selectTargetPos - boxHarf;
    }

    setTimeout(function () {
      snbwrap.css({
        transform: "translate3d(" + pos * -1 + "px, 0, 0)",
        "transition-duration": "500ms",
      });
    }, 200);
  }
}
