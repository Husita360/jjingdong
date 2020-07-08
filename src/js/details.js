// 放大镜

var smallbox =document.querySelector('.preview-img');
var bigbox = document.querySelector('.bigbox');
var ibox = document.querySelector('.i-box');
var bigimg = bigbox.children[0];
var smallpic = smallbox.children[0];
var list_li = $('.list li');
var list = document.querySelector('.list')
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

smallbox.onmouseenter = function(){
    ibox.style.display="block";
    bigbox.style.display="block";
    
    smallbox.onmousemove = function(event){
        var event = event || window.event;
        var pinX = event.clientX - smallbox.offsetParent.offsetLeft - ibox.offsetWidth / 2;
        var pinY = event.clientY - smallbox.offsetParent.offsetTop - ibox.offsetHeight / 2;
       ;
        
    //   如果小盒子左边距与上边距触摸边界值，则等于边界值
        if (pinX < 0) {
            pinX = 0;
        }
        if (pinX >= smallbox.offsetWidth - ibox.offsetWidth) {
            pinX = smallbox.offsetWidth - ibox.offsetWidth;

        }

        if (pinY < 0) {
            pinY = 0;
        }
        if (pinY >= smallbox.offsetHeight - ibox.offsetHeight) {
            pinY = smallbox.offsetHeight - ibox.offsetHeight;

        }
        // 小盒子移动
        ibox.style.left = pinX + "px";
        ibox.style.top = pinY + "px";
        // 大图移动
        bigimg.style.left = -pinX / (smallbox.offsetWidth / bigbox.offsetWidth) + "px";
        bigimg.style.top = -pinY / (smallbox.offsetHeight / bigbox.offsetHeight) + "px";
    }

}
// 离开原图
smallbox.onmouseleave = function(){
    bigbox.style.display="none";
    ibox.style.display="none";

}
for (var i=0;i<list_li.length;i++)
    {

        (
            function (i) {

                var img= list_li[i];
                img.onmouseover=function()
                {
                    smallpic.src="../images/preview"+(i+1)+".jpg";
                    bigimg.src="../images/preview"+(i+1)+".jpg";

                }
            }

        )(i)

    }


//  加入购物车
// $('.addShopCart').click(function(){

//     $.get("../php/addwq.php",{
//         id:1,
//         img:"$('#cell-pit').attr('src')",
//         price:"$('#cell-price').text()",
//         name:"$('#cell-name').text()"
        
//     },
//         function(data){
//             var json = JSON.parse(data);
//             if(json.code==1){
//                 alert('添加商品成功');
//             }else{
//                 alert('失败')
//             }
//     })
// })

$('.addShopCart').click(function(){
    $.get('../php/addwq.php',{
        id:100,
        img:"../images/preview1.jpg",
        price:19.80,
        name:"果沿子柚子红心葡萄柚红心西柚 4个装 单果220-300g 新鲜水果"
    },function(data){
        var json = JSON.parse(data);
        if(json.code==1){
            alert('添加商品成功');
        }
    })
})
console.log($('#cell-pit').attr('src'));




