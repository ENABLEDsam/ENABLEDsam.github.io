//nodet
var nopeNode = document.getElementById("Nah");
var yepNode = document.getElementById("Aye");
var awnNode = document.getElementById("vas");
var qesNode = document.getElementById("ques");

//varit
var mark = 0;
var puhd = 0;
var kass = 0;
var houl = 0;
var prog = 0;

//functiot

function noFunc(){
    mark = 0;
    puhd = 0;
    kass = 0;
    houl = 0;

    valCheFun()
}

function yeFunc(){
    mark = 0;
    puhd = 0;
    kass = 0;
    houl = 0;

    valCheFun()
}

function valCheFun(){
    if(one == 1){
        location.replace ("result1.html")
    }else if(two == 1){
        location.replace ("result2.html")
    }
}