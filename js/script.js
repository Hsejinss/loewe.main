$(document).ready(function(){
  
  // AOS 호출
  AOS.init();

  // 헤더 스크롤이벤트
  $(window).scroll(function(){
    const h = $(window).scrollTop();

    // console.log(h);

    // scrollTop: >= 800
    if($(window).scrollTop() > 800){
      $('.header-area').addClass('active');
      $('.header-area .header-logo .ico-logo').addClass('active');
      $('.icon-box li .header-ico').addClass('active');
      $('.hamburger').addClass('active');

    }else{
      $('.header-area').removeClass('active');
      $('.header-area .header-logo .ico-logo').removeClass('active');
      $('.icon-box li .header-ico').removeClass('active');
      $('.hamburger').removeClass('active');
    }
  });
  
  //banner swiper
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay:2000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //firstSwiper
  var swiper = new Swiper(".firstSwiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    slideToClickedSlide: true,
    // autoplay: {
    //   delay:2000
    // },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //detailSwiper
  // var swiper = new Swiper(".detailSwiper", {
  //   loop: true,
  //   slideToClickedSlide: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "progressbar",
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  // sec-3 data-alt right영역 detail 연결
  $('.sec-3 .right-content .product-swiper img').click(function(){
    // 스와이퍼의 이미지 클릭시 .right-content .detail-box에 active

    var detail = $(this).attr('data-tab');
    $(`#${detail}`).siblings().removeClass('active');
    $(`#${detail}`).addClass('active');


  });

  // sec-3 data-alt left영역 fitting 연결
  $('.sec-3 .right-content .product-swiper img').click(function(){
    // 스와이퍼의 이미지 클릭시 .left-content .w-product에 active

    var fitting = $(this).attr('data-alt');
    $(`#${fitting}`).siblings().removeClass('active');
    $(`#${fitting}`).addClass('active');

  });

  // sec-4 data-image 연결
  // 스와이퍼 이미지 클릭시 배경 색 변경

  $('.sec-3 .right-content .product-swiper img').click(function(){
    let changeBg = $(this).attr('data-image');
    $('.sec-3').css({
      'background-image':`url(${changeBg})`
    });
  });


});
