"use strict";$(function(){var t,n=null!=(t=localStorage.getItem("stuList"))?JSON.parse(t):new Array;function e(){for(var t=0,e=0;e<4;e++)t+="qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM".charAt(Math.floor(62*Math.random()));t=t.substring(1),$("#code").text(t)}function i(t,e,n,i){this.name=t,this.password=e,this.tel=n,this.id=i}$("input").eq(0).focus(function(){0==$(this).val().length&&$(this).parent().next("div").text("支持中文，字母，数字，'-'，'_'的多种组合")}),$("input").eq(1).focus(function(){0==$(this).val().length&&$(this).parent().next("div").text("建议使用字母、数字和符号两种以上的组合，6-20个字符")}),$("input").eq(2).focus(function(){0==$(this).val().length&&$(this).parent().next("div").text("请再次输入密码")}),$("input").eq(3).focus(function(){0==$(this).val().length&&$(this).parent().next("div").text("验证完后，你可以使用该手机登陆和找回密码")}),$("input").eq(4).focus(function(){0==$(this).val().length&&$(this).parent().next().next("div").text("看不清？点击图片更换验证码")}),$("input").eq(0).blur(function(){if(0==$(this).val().length)$(this).parent().next("div").text(""),$(this).parent().next("div").css("color","#ccc");else if(0<$(this).val().length&&$(this).val().length<4)$(this).parent().next("div").text("长度只能在4-20个字符之间"),$(this).parent().next("div").css("color","red");else if(4<=$(this).val().length&&!isNaN($(this).val()))$(this).parent().next("div").text("用户名不能为纯数字"),$(this).parent().next("div").css("color","red");else{for(var t=0;t<n.length;t++)if($(this).val()==n[t].name)return $(this).parent().next("div").text("该用户名已被注册"),void $(this).parent().next("div").css("color","red");$(this).parent().next("div").text("")}}),$("input").eq(1).blur(function(){0==$(this).val().length?($(this).parent().next("div").text(""),$(this).parent().next("div").css("color","#ccc")):0<$(this).val().length&&$(this).val().length<6?($(this).parent().next("div").text("长度只能在6-20个字符之间"),$(this).parent().next("div").css("color","red")):$(this).parent().next("div").text("")}),$("input").eq(2).blur(function(){0==$(this).val().length?($(this).parent().next("div").text(""),$(this).parent().next("div").css("color","#ccc")):$(this).val()!=$("input").eq(1).val()?($(this).parent().next("div").text("两次密码不匹配"),$(this).parent().next("div").css("color","red")):$(this).parent().next("div").text("")}),$("input").eq(3).blur(function(){0==$(this).val().length?($(this).parent().next("div").text(""),$(this).parent().next("div").css("color","#ccc")):138!=$(this).val().substr(0,3)&&189!=$(this).val().substr(0,3)&&139!=$(this).val().substr(0,3)&&158!=$(this).val().substr(0,3)&&188!=$(this).val().substr(0,3)&&157!=$(this).val().substr(0,3)||11!=$(this).val().length?($(this).parent().next("div").text("手机号格式不正确"),$(this).parent().next("div").css("color","red")):$(this).parent().next("div").text("")}),e(),$("#code").click(e),$("input").eq(4).blur(function(){0==$(this).val().length?($(this).parent().next().next("div").text(""),$(this).parent().next().next("div").css("color","#ccc")):$(this).val().toUpperCase()!=$("#code").text().toUpperCase()?($(this).parent().next().next("div").text("验证码不正确"),$(this).parent().next().next("div").css("color","red")):$(this).parent().next().next("div").text("")}),$("#submit_btn").click(function(t){for(var e=0;e<5;e++)if(0==$("input").eq(e).val().length)return $("input").eq(e).focus(),4==e?($("input").eq(e).parent().next().next("div").text("此处不能为空"),$("input").eq(e).parent().next().next("div").css("color","red")):($("input").eq(e).parent().next(".tips").text("此处不能为空"),$("input").eq(e).parent().next(".tips").css("color","red")),void t.preventDefault();if(!$("#xieyi")[0].checked)return $("#xieyi").next().next().next(".tips").text("请勾选协议"),$("#xieyi").next().next().next(".tips").css("color","red"),void t.preventDefault();n.push(new i($("input").eq(0).val(),$("input").eq(1).val(),$("input").eq(3).val(),n.length+1)),localStorage.setItem("stuList",JSON.stringify(n)),$("#submit_btn").click(function(){var t=$("#username").val(),e=$("#pwd").val(),n=$("#phoneNumber").val();$.post("../php/regist.php",{username:t,password:e,phoneNumber:n},function(t){t&&(alert("成功"),window.open("../pages/login.html"))}),console.log(t),console.log(n),console.log(e)})})});