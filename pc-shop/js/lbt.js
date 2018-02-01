var $lis = $(".m_unit ul li");
var $los = $(".circles ol li");
var idx = 0;
$(".leftBtn").click(function(){
    if( $lis.eq(idx).is(":animated") ){
        return;
    }
    $lis.eq(idx).fadeOut(1000);
    idx--;
    if(idx < 0){
        idx = $lis.length-1;
    }
    $lis.eq(idx).fadeIn(1000);
    $los.eq(idx).addClass("cur").siblings().removeClass();
})
$(".rightBtn").click(function(){
    move();
})
function move(){
    if( $lis.eq(idx).is(":animated") ){
        return;
    }
    $lis.eq(idx).fadeOut(1000);
    idx++;
    if(idx > $lis.length-1){
        idx = 0;
    }
    $lis.eq(idx).fadeIn(1000);
    $los.eq(idx).addClass("cur").siblings().removeClass();
}
$los.mouseenter(function(){
    idx = $(this).index();
    $lis.eq(idx).fadeIn(1000).siblings().fadeOut(1000);
    $los.eq(idx).addClass("cur").siblings().removeClass();
})
var timer = null;
function fun(){
    timer = setInterval(function(){
        move();
    },3000);
}
fun();
$(".carousel").mouseenter(function(){
    clearInterval(timer);
})
$(".carousel").mouseleave(function(){
    fun();
})