
// cate-menu 显示栏
$('.cate-menu').children().mouseenter(function(){
  $(this).addClass('cate-menu-on').siblings().removeClass('cate-menu-on');
  $('.cate-part').css({
    'display':'block'
  })
})
$('.cate-menu').mouseleave(function(){
    $(this).children().removeClass('cate-menu-on');
      $('.cate-part').css({
        'display':'none'
      })
})
$(".cate-menu li a").addClass('cate-menu-lk');
