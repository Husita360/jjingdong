"use strict";var smallbox=document.querySelector(".preview-img"),bigbox=document.querySelector(".bigbox"),ibox=document.querySelector(".i-box"),bigimg=bigbox.children[0],smallpic=smallbox.children[0],list_li=$(".list li"),list=document.querySelector(".list"),prev=document.querySelector(".prev"),next=document.querySelector(".next");smallbox.onmouseenter=function(){ibox.style.display="block",bigbox.style.display="block",smallbox.onmousemove=function(e){var o=(e=e||window.event).clientX-smallbox.offsetParent.offsetLeft-ibox.offsetWidth/2,i=e.clientY-smallbox.offsetParent.offsetTop-ibox.offsetHeight/2;o<0&&(o=0),o>=smallbox.offsetWidth-ibox.offsetWidth&&(o=smallbox.offsetWidth-ibox.offsetWidth),i<0&&(i=0),i>=smallbox.offsetHeight-ibox.offsetHeight&&(i=smallbox.offsetHeight-ibox.offsetHeight),ibox.style.left=o+"px",ibox.style.top=i+"px",bigimg.style.left=-o/(smallbox.offsetWidth/bigbox.offsetWidth)+"px",bigimg.style.top=-i/(smallbox.offsetHeight/bigbox.offsetHeight)+"px"}},smallbox.onmouseleave=function(){bigbox.style.display="none",ibox.style.display="none"};for(var i=0;i<list_li.length;i++)!function(e){list_li[e].onmouseover=function(){smallpic.src="../images/preview"+(e+1)+".jpg",bigimg.src="../images/preview"+(e+1)+".jpg"}}(i);$(".addShopCart").click(function(){$.get("../php/addwq.php",{id:100,img:"../images/preview1.jpg",price:19.8,name:"果沿子柚子红心葡萄柚红心西柚 4个装 单果220-300g 新鲜水果"},function(e){1==JSON.parse(e).code&&alert("添加商品成功")})}),console.log($("#cell-pit").attr("src"));