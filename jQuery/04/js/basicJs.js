//$(function(){
//    $("h1").click(function(){
//        $(".sample").slideToggle(1000);
//    });
//});

$(function(){
    $("h1").click(function(){
        $(".sample").animate({
            height: '+=100px',
            width: '+=100px'
        },1000,);
    });
});