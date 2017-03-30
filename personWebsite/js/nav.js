/**
 * Created by nad on 2017/3/17.
 */
/**
 * Created by nad on 2017/3/17.
 */
//点击导航栏缓慢滑动至指定位置
$(function () {
    $("#li1").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });

    $("#li2").click(function(){
        $('body,html').animate({scrollTop:720},1000);
        return false;
    });
    $("#li3").click(function(){
        $('body,html').animate({scrollTop:1320},1000);
        return false;
    });

    $("#li4").click(function(){
        $('body,html').animate({scrollTop:1820},1000);
        return false;
    });
    $("#li5").click(function(){
        $('body,html').animate({scrollTop:2420},1000);
        return false;
    });
    $("#li6").click(function(){
        $('body,html').animate({scrollTop:3020},1000);
        return false;
    });
    $(window).scroll(function(){
        if ($(window).scrollTop()>800){
            $(".html-content").animate({width:610},1000);
            $(".css-content").animate({width:610},1000);
            $(".javascript-content").animate({width:540},1000);
            $(".php-content").animate({width:540},1000);

        }

    });



});


