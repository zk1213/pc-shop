var page = 2;

showShop(page);

function showShop(page){
    if($(window).scrollTop()>5000){
        return
    }
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_goods.php?page="+page+"&pagesize=10",
        "type": "GET",
        "dataType": "json",
        "success": function(response){
            for(var i=0;i<response.data.length;i++){
                $("#shop").append('<li><img src="' +response.data[i].goods_thumb+ '" alt="" /><div><p><a href="detail.html?goods_id=' +response.data[i].goods_id+ '">' +response.data[i].goods_name+  '</a></p><p>' +response.data[i].goods_desc+  '</p><p class="oP">￥' +response.data[i].price+' &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="detail.html?goods_id=' +response.data[i].goods_id+' "><button class="addCart">点击查看详情</button></a></p></div></li>')
            }
            lock = true;
        }
    })
}
var lock = true; 
$(window).scroll(function(){
    if(!lock) return; 
    var A = $(window).scrollTop();
    var B = $(window).height();
    var C = $(document).height();
    var rate = A / (C - B);
    if( rate >= 0.7 ){
        page++; 
        showShop(page);
        lock = false;
    }
})

$.get("http://h6.duchengjiu.top/shop/api_goods.php",function(response){
         for(var i=0;i<5;i++){		
         $("#goodsUl").append('<li><img src="' +response.data[i].goods_thumb+ '" alt="" /><div><p><a href="detail.html?goods_id=' +response.data[i].goods_id+ '">' +response.data[i].goods_name+  '</a></p><p>' +response.data[i].goods_desc+  '</p><p class="oP">￥' +response.data[i].price+'  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="detail.html?goods_id=' +response.data[i].goods_id+' "><button class="addCart">点击查看详情</button></a></p></div></li>')	
    }
})
$("#btn1").click(function(){
    var search = $("#search").val();
    window.location.href =  "search.html?search_text=" + search;
})
$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(response){                
    for(var i=0;i<response.data.length;i++){
         $("#nav").append('<li><a href="list.html?cat_id=' +response.data[i].cat_id+ '">' +response.data[i].cat_name+ '</a></li>');
    } 
})
if( localStorage.getItem("token") ){
    $(".login").html("用户名是：" + localStorage.getItem("username") + "&nbsp;<button id='clear' style='background-color:skyblue;color:yellow'>取消登录</button>")
  }

  $("#clear").click(function(){
    localStorage.clear();
    $(".login").html('<a href="register.html">注册</a><span>|</span><a href="login.html">登录</a>');
  })