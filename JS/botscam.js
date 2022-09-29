//nodet
var nopeNode = document.getElementById("Nah");
var yepNode = document.getElementById("Aye");
var awnNode = document.getElementById("vas");
var qesNode = document.getElementById("ques");

//varit
var one = 0;
var two = 0;
var thre = 0;
var four = 0;
var prog = 0;

//functiot

function noFunc(){
    one = 1;
    two = 0;

    valCheFun()
}

function yeFunc(){
    two = 1;
    one = 0;

    valCheFun()
}

function valCheFun(){
    if(one == 1){
        location.replace ("result1.html")
    }else if(two == 1){
        location.replace ("result2.html")
    }
}