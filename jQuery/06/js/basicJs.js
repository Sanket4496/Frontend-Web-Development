$(function(){
    $(".btn1").click(function(){
        alert("text is: " + $("h1").text());
    });
});

$(function(){
    $(".btn2").click(function(){
        alert("HTML is: " + $("h1").html());
    });
});
$(function(){
    $(".btn3").click(function(){
        alert("value is: " + $("input").val());
    });
});

$(function(){
    $(".btn4").click(function(){
        alert("value is: " + $("a").attr("href"));
    });
});
