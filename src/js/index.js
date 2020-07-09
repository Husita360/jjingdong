

console.log(1);

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

// 小选项卡

$('.li2_wrap ol a').on('mouseenter',function(){
  //被点击的li的类名变成active,其他的都没有类名
  $(this).addClass('active').siblings().removeClass('active')
  .parent().next().children().eq($(this).index()).addClass('active').siblings().removeClass('active');
  //链式编程
})
