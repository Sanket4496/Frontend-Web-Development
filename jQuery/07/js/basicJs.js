//$(function(){
//    $(".btn1").click(function(){
//        $("h1").text("I am learning JQuery!")
//    });
//});

$(function(){
    $(".btn1").click(function(){
        $("h1").text(function(i, origi){
            return origi + " with BinaryHub"
        });
    });
});

$(function(){
    $(".btn2").click(function(){
        $("h1").html("<i>I am getting good at Jquery!</i>")
    });
});
$(function(){
    $(".btn3").click(function(){
        $("input").val("Paris");
    });
});

$(function(){
    $(".btn4").click(function(){
        $("a").attr({
            "href":"https://bing.com",
            "title":"Going to Bing"
        });
    });
});
