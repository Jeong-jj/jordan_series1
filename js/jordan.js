// nav 클릭시 depth2 표시
$('.siteMap').on('click', function() {
  $(this).siblings('.depth2').slideToggle().css({
    display:'flex'
  })
})

// 버튼 클릭시 jordan info 슬라이드 및 버튼 arrow 변경
$('#section2 .about23 .btn').on('click', function() {
  if ( $(this).hasClass('on') === false ) {
    $('#section2 .about23 .btn i').removeClass('fa-caret-down').addClass('fa-caret-up')

    $(this).addClass('on')
  }
  else if ( $(this).hasClass('on') === true ) {
    $('#section2 .about23 .btn i').removeClass('fa-caret-up').addClass('fa-caret-down')

    $(this).removeClass('on')
  }
  $('.info23').slideToggle()
})

// jordan info 내부 효과
$(".slideInner").slick({            
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false,
  fade: true,
  arrows: false,
  })

$('.info23 .chicago .chicagoLogo').on('mouseover', function() {
  $(this).css({
    transform: "scale(1.2)"
  })
})
$('.info23 .chicago .chicagoLogo').on('mouseout', function() {
  $(this).css({
    transform: "scale(1.0)"
  })
})