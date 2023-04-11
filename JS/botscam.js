//nodet
var nopeNode = document.getElementById("Nah");
var yepNode = document.getElementById("Aye");
var qesNode = document.getElementById("ques");



//varit
var mark = 0;
var puhd = 0;
var kass = 0;
var houl = 0;
var prog = 0;
var cook = 0;

//functiot

function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
}

hover(nopeNode, e => { //e elementti v&auml;itt&auml;&auml; turhuuttua mutta koodi ei toimi ilman sit&auml;
    // On hover
    nopeNode.style.height = "280px";
    nopeNode.style.width = "280px";
  }, e => {
    // On exit hover
    nopeNode.style.height = "300px";
    nopeNode.style.width = "300px";
})

hover(yepNode, e => { //e elementti v&auml;itt&auml;&auml; turhuuttua mutta koodi ei toimi ilman sit&auml;
    // On hover
    yepNode.style.height = "280px";
    yepNode.style.width = "280px";
  }, e => {
    // On exit hover
    yepNode.style.height = "300px";
    yepNode.style.width = "300px";
})

function noFunc(){


    if(prog == 0){

        qesNode.innerHTML = ("Kiinnostaisiko sinua ruumiillista ponniskelua teht&auml;v&auml; ty&ouml;?")

        prog ++


    }else if(prog == 1){
        mark ++;
        kass ++;

        qesNode.innerText = ("Oletko k&auml;tev&auml; k&auml;sist&auml;si ja hyv&auml; kokoamaan huonekaluja?")

        prog ++

    }else if(prog == 2){
        cook ++;
        puhd ++;
        mark ++;
        kass ++;
       
        qesNode.innerText = ("Pid&auml;tk&ouml; ruoanlaitosta?")

        prog ++

    }else if(prog == 3){
        houl ++;
        puhd ++;
        mark ++;
        kass ++;

        qesNode.innerText = ("Haaveiletko viestinn&auml;n ja tiedottamisen parissa ty&ouml;skentelyst&auml;?")

        prog ++
    }else if(prog == 4){
        houl ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Viet&auml;tk&ouml; mielell&auml;si paljon aikaa tietokoneen &auml;&auml;ress&auml;?")

        prog ++
    }else if(prog == 5){
        puhd ++
        houl ++ 
        cook ++
        
        qesNode.innerText = ("Onko sinulla ajokortti ja haluaisit ajaa ty&ouml;ksesi autoa?")

        prog ++
    }else if(prog == 6){
        mark ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Oletko palveluhenkinen ja pid&auml;t ty&ouml;skentelyst&auml; erilaisten ihmisten kanssa?")

        prog ++
    }else if (prog == 7){
        puhd ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Oletko tarkka puhtaudestaja siisteydest&auml;?")

        prog ++
    }else if(prog == 8){
        mark ++
        kass ++
        houl ++

        qesNode.innerText = ("Haluatko tehd&auml; t&ouml;it&auml; numeroiden parissa?")

        prog ++
    }else if(prog == 9){
        puhd ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Kiinnostaako sinua py&ouml;ritt&auml;&auml; vaatekauppaa?")

        prog ++
    }else if(prog == 10){
        puhd ++
        cook ++
        mark ++
        houl ++
        
        qesNode.innerText = ("Oletko herkk&auml; hajuille?")

        prog ++
    }else if(prog == 11){
        kass ++
        cook ++
        mark ++
        houl ++
        
        qesNode.innerText = ("Kest&auml;tk&ouml; painetta ty&ouml;ss&auml;?")

        prog ++
    }else if(prog == 12){
        puhd = 1;
        kass = 1;
        houl = 1;

        qesNode.innerText = ("Pid&auml;tk&ouml; mekaanisesta ty&ouml;st&auml;?")

        prog ++
    }else if(prog == 13){
        kass ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Oletko luova?")

        prog ++
    }else if(prog == 14){
        houl ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Koetko hygienian t&auml;rke&auml;ksi?")

        prog ++
    }else if(prog == 15){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Kiinnostaako vaihtelevat ty&ouml;t ja projektit?")

        prog ++
    }else if(prog == 16){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Pid&auml;tk&ouml; samankaltaisista toistuvista t&ouml;ist&auml;?")

        prog ++
    }else if(prog == 17){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Pid&auml;tk&ouml; kiinteist&ouml;n hoidosta?")

        prog ++
    }else if(prog == 18){
        mark ++;
        kass ++;
        cook ++;

        qesNode.innerText = ("Tykk&auml;&auml;tk&ouml; ty&ouml;skennell&auml; yksin?")

        prog ++
    }else if(prog == 19){
        kass ++;
        houl ++;

        qesNode.innerText = ("Tykk&auml;&auml;tk&ouml; ty&ouml;skennell&auml; ryhm&auml;ss&auml;?")

        prog ++
    }else if(prog == 20){
        mark ++;
        puhd ++;
        cook ++;

        yeetPage()
    }


}

function yeFunc(){


    if(prog == 0){
        mark = 1;
        puhd = 1;
        kass = 1;
        houl = 1;
        cook = 1;

        qesNode.innerText = ("Kiinnostaisiko sinua ruumiillista ponniskelua teht&auml;v&auml; ty&ouml;?")

        prog ++

        
    }else if(prog == 1){
        houl ++;
        cook ++;
        puhd ++;
       
        qesNode.innerText = ("Oletko k&auml;tev&auml; k&auml;sist&auml;si ja hyv&auml; kokoamaan huonekaluja?")

        prog ++

    }else if(prog == 2){
        houl ++; 

        qesNode.innerText = ("Pid&auml;tk&ouml; ruoanlaitosta?")

        prog ++

    }else if(prog == 3){
        cook ++;

        qesNode.innerText = ("Haaveiletko viestinn&auml;n ja tiedottamisen parissa ty&ouml;skentelyst&auml;?")

        prog ++
    }else if(prog == 4){
        mark ++

        qesNode.innerText = ("Viet&auml;tk&ouml; mielell&auml;si paljon aikaa tietokoneen &auml;&auml;ress&auml;?")

        prog ++
    }else if(prog == 5){
        mark ++
        kass ++
        
        qesNode.innerText = ("Onko sinulla ajokortti ja haluaisit ajaa ty&ouml;ksesi autoa?")

        prog ++
    }else if(prog == 6){
        houl ++

        qesNode.innerText = ("Oletko palveluhenkinen ja pid&auml;t ty&ouml;skentelyst&auml; erilaisten ihmisten kanssa?")

        prog ++
    }else if(prog == 7){
        kass ++

        qesNode.innerText = ("Oletko tarkka puhtaudestaja siisteydest&auml;?")

        prog ++
    }else if(prog == 8){
        puhd ++
        cook ++

        qesNode.innerText = ("Haluatko tehd&auml; t&ouml;it&auml; numeroiden parissa?")

        prog ++
    }else if(prog == 9){
        kass ++

        qesNode.innerText = ("Kiinnostaako sinua py&ouml;ritt&auml;&auml; vaatekauppaa?")

        prog ++
    }else if(prog == 10){
        kass ++

        qesNode.innerText = ("Oletko herkk&auml; hajuille?")

        prog ++
    }else if(prog == 11){
        puhd ++

        qesNode.innerText = ("Kest&auml;tk&ouml; painetta ty&ouml;ss&auml;?")

        prog ++
    }else if(prog == 12){
        mark ++
        cook ++

        qesNode.innerText = ("Pid&auml;tk&ouml; mekaanisesta ty&ouml;st&auml;?")

        prog ++
    }else if(prog == 13){
        puhd ++;

        qesNode.innerText = ("Oletko luova?")

        prog ++
    }else if(prog == 14){
        mark ++;

        qesNode.innerText = ("Koetko hygienian t&auml;rke&auml;ksi?")

        prog ++
    }else if(prog == 15){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Kiinnostaako vaihtelevat ty&ouml;t ja projektit?")

        prog ++
    }else if(prog == 16){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Pid&auml;tk&ouml; samankaltaisista toistuvista t&ouml;ist&auml;?")

        prog ++
    }else if(prog == 17){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Pid&auml;tk&ouml; kiinteist&ouml;n hoidosta?")

        prog ++
    }else if(prog == 18){
        puhd ++;
        houl ++;

        qesNode.innerText = ("Tykk&auml;&auml;tk&ouml; ty&ouml;skennell&auml; yksin?")

        prog ++
    }else if(prog == 19){
        mark ++;
        puhd ++;
        cook ++;

        qesNode.innerText = ("Tykk&auml;&auml;tk&ouml; ty&ouml;skennell&auml; ryhm&auml;ss&auml;?")

        prog ++
    }else if(prog == 20){
        kass ++;
        houl ++;

        yeetPage()
    }


}

function yeetPage(){


    if (mark > puhd && mark > kass && mark > houl && mark > cook){
        window.location.href = "result2.html";
    }else if (puhd > mark && puhd > kass && puhd > houl && puhd > cook){
        window.location.href = "result3.html";
    }else if (kass > puhd && kass > mark && kass > houl && kass > cook){
        window.location.href = "result4.html";
    }else if (houl > puhd && houl > kass && houl > mark && houl > cook){
        window.location.href = "result1.html";
    }else if (cook > puhd && cook > kass && cook > houl && cook > mark){
        window.location.href = "result5.html";
    }
}