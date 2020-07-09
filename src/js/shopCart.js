
var $name = $('#cell-name');
var $price = $('#cell-price');
var $img = $('#cell-img');
var $countDown =$('.countDown');
var $countUp =$('.countUp');
var $numCount =$('#numCount').val();
var $sum =$('#cell-sum').text();

    $.get('../php/showlist.php',function(data){
        var json = JSON.parse(data);
        console.log(data);
        if(json.code==0){
            alert('购物车里面空空的')
        }else{
              console.log(json.data[2].product_name);
             $('#cell-name').append(json.data[2].product_name)
             $('#cell-price').html(json.data[2].product_price)
             $('#cell-img ').attr("src",json.data[2].product_img)
        }
      
    })

    // 选中
    $('input#check_all').click(function(){
        var a =0
        if($("[type='checkbox']").is(':checked')){
            
            $("[type='checkbox']").attr("checked","ture")
        }else{
            $("[type='checkbox']").removeAttr('checked')
        }
       console.log($('input#check_all'));
        
    })

console.log($countUp);
    // 计算
    // $countDown.click(function(){
    //     $numCount = $numCount -1;
    //     $numCount.val()
    //     console.log($numCount);
    // })
        
    

   

