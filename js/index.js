// page 이동 버튼 효과
$('#section2 .btnBox > div').on('mouseover', function() {
  $(this).css({
    transform: 'scale(1.2)'
  })
})
$('#section2 .btnBox > div').on('mouseout', function() {
  $(this).css({
    transform: 'scale(1.0)'
  })
})

// 햄버거 메뉴
$('#nav .openBtn').on('click', function() {
  $(this).addClass('on')
  $(this).parents('#nav').addClass('on')
  $(this).siblings('.menu').addClass('on')
})
$('#nav .menu .closeBtn').on('click', function() {
  $(this).parents('#nav', '.menu').removeClass('on')
  $(this).parents('.menu').siblings('.openBtn').removeClass('on')
})