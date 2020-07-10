
// 轮播图1



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

// 搜索框
$('.search-txt').on('input',function(){
  var text = $(this).val();
    $.ajax({
      url:"https://suggest.taobao.com/sug?code=utf-8&q=ad&extras=1&area=c2c&bucketid=atb_search&pid=mm_130402922_1111150093_109790500145&unid=&clk1=&_=1594348221884",
      success:function(data){
        $('.search_ul').empty();
        $.each(data.result,function(index,value){
          $('.search_ul').append('<a href="#">'+'<li>'+value[0]+'</li>'+'</a>')
        })


      },
      dataType:"jsonp"
    })
})
$(".search-txt").focusout(function(){
  $('.search_ul').empty();
})
