$('.siteMap').on('click', function() {
  $(this).siblings('.depth2').slideToggle().css({
    display:'flex'
  })
})

// 슬릭 슬라이드
$(".slideBox").slick({            
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  draggable: true,
  arrows: true,
  prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
  })

// mouse in&out에 따라 슬라이드 개체 크기 확대 
$('#section2 .options .slide').on('mouseover', function() {
  $(this).css({
    transform: 'scale(1.15)'
  })
})
$('#section2 .options .slide').on('mouseout', function() {
  $(this).css({
    transform: 'scale(1.0)'
  })
})

// 슬라이드 클릭시 위 stage 이미지를 해당 슬라이드 이미지로 변경 & 사이즈 조절
$('#section2 .options .slide img').on('click', function() {
  $('#section2 .stageBox .question').removeClass('question').addClass('on')
  var img = $(this).attr('src')
  $('#section2 .stageBox .on img').attr('src', img)

  if ( $(this).parent().hasClass('darkmocha') === true ) {
    $('#section2 .stageBox .on img').css({
      width: '480px'
    })
  } else {
    $('#section2 .stageBox .on img').css({
      width: '560px'
    })
  }
})