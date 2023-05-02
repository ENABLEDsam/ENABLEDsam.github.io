var manualNode = document.getElementById('language');

manualNode.addEventListener("change",translate);

function translate(){
    if(manualNode.value == "fin"){
        window.location.href = "manul_fi.html";
    }else if(manualNode.value == "eng"){
        window.location.href = "manul_eng.html";
    }
}