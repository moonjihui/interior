$(function(){

    // 메뉴
    $(".main>li").mouseover(function(){
        $(".sub , .subback").stop().slideDown()
    })

    $(".main>li").mouseout(function(){
        $(".sub , .subback").stop().slideUp()
    })//

    //슬라이드 베너

    var n=0
    setInterval( move , 2000);

    function move(){
        
        if(n<2){
            n++
        }else{
            n=0
        }//if
        var pos = n*(-1200)+"px"
        // console.log("n :", n)
        // console.log("pos :", pos)
        $(".img_slide ul").animate({left : pos}, 500)
    }

    //리뷰 버튼클릭
    $(".prev").click(function(e){
        e.preventDefault();
        $(".review_img").stop().animate({left:"-=550px"},500 , function(){
            $(".review_img").append($(".review_img li").first())
            $(".review_img").css("left","+=550px")
        })
    })

    $(".next").click(function(e){
        e.preventDefault();
        $(".review_img").css("left","-=550px")
        $(".review_img").prepend($(".review_img li").last())
        $(".review_img").stop().animate({left:"+=550px"},500)
    })

    //팝업창
    $(".close").click(function(){
        $(".popup ").hide()
    })
})//jQ