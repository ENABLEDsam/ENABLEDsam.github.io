var manualNode = document.getElementById('language');
var btn1 = document.getElementById('sec1');
var btn2 = document.getElementById('sec2');
var section1 = document.querySelectorAll('.section1');
var section2 = document.querySelectorAll('.section2');

var col = true;
var col2 = true;

manualNode.addEventListener("change",translate);
btn1.addEventListener("click",collapse1);
btn2.addEventListener("click",collapse2);

function translate(){
    if(manualNode.value == "fin"){
        window.location.href = "manul_fi.php";
    }else if(manualNode.value == "eng"){
        window.location.href = "manul_eng.php";
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
            if(section1[i].nodeName == "LI"){
                section1[i].style.display = "list-item";
            }else{
                section1[i].style.display = "block";
            }
            
            btn1.innerText = "\u2193\u2193";
        }
    }

    if(col == false){
        col = true
    }else if(col == true){
        col = false
    }
}

function collapse2(){

    if(col2 == true){
        for (let i = 0; i < section1.length; i++) {
            section2[i].style.display = "none";
            btn2.innerText = "\u2191\u2191";

            col2 = false
        }
    }else if(col2 == false){
        for (let i = 0; i < section1.length; i++) {
            if(section2[i].nodeName == "LI"){
                section2[i].style.display = "list-item";
            }else{
                section2[i].style.display = "block";
            }
            
            btn2.innerText = "\u2193\u2193";

            col2 = true
        }
    }

}