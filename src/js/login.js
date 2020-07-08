
// 二维码移动
$('.qr-code-wrap').mouseenter(function(){
    $('.qr-code-img').stop().animate({
        left:0
    },
    function(){
        $('.qr-code-in').stop().fadeIn('fast')
    })
})
$('.qr-code-wrap').mouseleave(function(){
   $('.qr-code-in').stop().fadeOut("fast",function(){
        $('.qr-code-img').stop().animate({
            left:"64px"
        })
   })
})

// 点击切换登陆模式
$('#codelogin').click(function(){
    $('.qrlogin').css({
        display:"block"
    });
    $('.userlogin').css({
        display:"none"
    })
})
$('#userlogin').click(function(){
    $('.userlogin').css({
        display:"block"
    });
    $('.qrlogin').css({
        display:"none"
    })
})

//点击登录，验证账户密码

$("#loginBtn").click(function(){
   var $act = $('#username').val();
   var $pwd = $('#password').val();
    $.post(
        '../php/login.php',
        'username='+$act+'&password='+$pwd,
        function(data){
            var json = JSON.parse(data);
            if(json.code ==1){           
                location.href="./index.html";            
            }else{
                $('.tips').css({
                    display:"block"
                })
            }
        }
    )
})