//$(function(){
//    $(".blink").Typed({
//  strings: ["Eter your Todo", "Enter your Todo"],
//  typeSpeed: 0
//    });
//});

//var typed = new Typed('.blink', {
//  strings: ["First sentence.", "Second sentence."],
//  typeSpeed: 0
//});

$(function(){
    $(".blink").typed({
  strings: ["Eter your Todo", "Enter your Todo"],
  typeSpeed: 0
    });
});


var add = document.getElementById("add");
var removeAll = document.getElementById("removeall");
var list = document.getElementById("list");

// remove all

removeAll.onclick = function() {
    list.innerHTML = '';
}

//adding new lsit
add.onclick = function() {
    addlis(list);
    document.getElementById("userinput").value = '';
    document.getElementById("userinput").focus;
}

function addlis(targetUl){
    var inputText = document.getElementById("userinput").value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');
    
    if(inputText !== ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = '&times';
        removeButton.setAttribute('onclick', 'removeMe(this)')
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        
        targetUl.appendChild(li);
    }
    else{
        alert("Please enter a todo")
    }
}


function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}