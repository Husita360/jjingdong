

    $.get('../php/showlist.php',function(data){
        var json = JSON.parse(data);
        if(json.code==0){
            alert('购物车里面空空的')
        }else{
              console.log(json.data[2].product_name);
             $('#cell-name').html(json.data[2].product_name)
             $('#cell-price').html(json.data[2].product_price)
             $('#cell-img ').attr("src",json.data[2].product_img)
        }
      
    })
   

