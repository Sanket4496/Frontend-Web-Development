var keylist = "abcdefghijklmnopqrstuvwxyz123456789@!#$%&^*";
var tmp = '';
function generatePass(plength){
    tmp = '';
    for(var i = 0; i<plength ; i++){
        tmp += keylist.charAt(Math.floor(Math.random() * keylist.length))
    }
    return tmp;
}
        
function populateform(enterlength){
    document.passGen.output.value = generatePass(enterlength);
}