var manualNode = document.getElementById('language');
var btn1 = document.getElementById('sec1');
var section1 = document.querySelectorAll('.section1');

var col = true;

manualNode.addEventListener("change",translate);
btn1.addEventListener("click",collapse1);

function translate(){
    if(manualNode.value == "fin"){
        window.location.href = "manul_fi.html";
    }else if(manualNode.value == "eng"){
        window.location.href = "manul_eng.html";
    }
}

function collapse1(){

    if(col == true){
        for (let i = 0; i < section1.length; i++) {
            section1[i].style.display = "none";
            btn1.innerText = "\u2191\u2191";
        }
    }else if(col == false){
        for (let i = 0; i < section1.length; i++) {
            section1[i].style.display = "initial";
            btn1.innerText = "\u2193\u2193";
        }
    }

    if(col == false){
        col = true
    }else if(col == true){
        col = false
    }
}