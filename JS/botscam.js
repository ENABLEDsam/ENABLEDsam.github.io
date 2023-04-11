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

hover(nopeNode, e => { //e elementti väittää turhuuttua mutta koodi ei toimi ilman sitä
    // On hover
    nopeNode.style.height = "280px";
    nopeNode.style.width = "280px";
  }, e => {
    // On exit hover
    nopeNode.style.height = "300px";
    nopeNode.style.width = "300px";
})

hover(yepNode, e => { //e elementti väittää turhuuttua mutta koodi ei toimi ilman sitä
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

        qesNode.innerText = ("Kiinnostaisiko sinua ruumiillista ponniskelua tehtävä työ?")

        prog ++


    }else if(prog == 1){
        mark ++;
        kass ++;

        qesNode.innerText = ("Oletko kätevä käsistäsi ja hyvä kokoamaan huonekaluja?")

        prog ++

    }else if(prog == 2){
        cook ++;
        puhd ++;
        mark ++;
        kass ++;
       
        qesNode.innerText = ("Pidätkö ruoanlaitosta?")

        prog ++

    }else if(prog == 3){
        houl ++;
        puhd ++;
        mark ++;
        kass ++;

        qesNode.innerText = ("Haaveiletko viestinnän ja tiedottamisen parissa työskentelystä?")

        prog ++
    }else if(prog == 4){
        houl ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Vietätkö mielelläsi paljon aikaa tietokoneen ääressä?")

        prog ++
    }else if(prog == 5){
        puhd ++
        houl ++ 
        cook ++
        
        qesNode.innerText = ("Onko sinulla ajokortti ja haluaisit ajaa työksesi autoa?")

        prog ++
    }else if(prog == 6){
        mark ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Oletko palveluhenkinen ja pidät työskentelystä erilaisten ihmisten kanssa?")

        prog ++
    }else if (prog == 7){
        puhd ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Oletko tarkka puhtaudestaja siisteydestä?")

        prog ++
    }else if(prog == 8){
        mark ++
        kass ++
        houl ++

        qesNode.innerText = ("Haluatko tehdä töitä numeroiden parissa?")

        prog ++
    }else if(prog == 9){
        puhd ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Kiinnostaako sinua pyörittää vaatekauppaa?")

        prog ++
    }else if(prog == 10){
        puhd ++
        cook ++
        mark ++
        houl ++
        
        qesNode.innerText = ("Oletko herkkä hajuille?")

        prog ++
    }else if(prog == 11){
        kass ++
        cook ++
        mark ++
        houl ++
        
        qesNode.innerText = ("Kestätkö painetta työssä?")

        prog ++
    }else if(prog == 12){
        puhd = 1;
        kass = 1;
        houl = 1;

        qesNode.innerText = ("Pidätkö mekaanisesta työstä?")

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

        qesNode.innerText = ("Koetko hygienian tärkeäksi?")

        prog ++
    }else if(prog == 15){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Kiinnostaako vaihtelevat työt ja projektit?")

        prog ++
    }else if(prog == 16){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Pidätkö samankaltaisista toistuvista töistä?")

        prog ++
    }else if(prog == 17){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Pidätkö kiinteistön hoidosta?")

        prog ++
    }else if(prog == 18){
        mark ++;
        kass ++;
        cook ++;

        qesNode.innerText = ("Tykkäätkö työskennellä yksin?")

        prog ++
    }else if(prog == 19){
        kass ++;
        houl ++;

        qesNode.innerText = ("Tykkäätkö työskennellä ryhmässä?")

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

        qesNode.innerText = ("Kiinnostaisiko sinua ruumiillista ponniskelua tehtävä työ?")

        prog ++

        
    }else if(prog == 1){
        houl ++;
        cook ++;
        puhd ++;
       
        qesNode.innerText = ("Oletko kätevä käsistäsi ja hyvä kokoamaan huonekaluja?")

        prog ++

    }else if(prog == 2){
        houl ++; 

        qesNode.innerText = ("Pidätkö ruoanlaitosta?")

        prog ++

    }else if(prog == 3){
        cook ++;

        qesNode.innerText = ("Haaveiletko viestinnän ja tiedottamisen parissa työskentelystä?")

        prog ++
    }else if(prog == 4){
        mark ++

        qesNode.innerText = ("Vietätkö mielelläsi paljon aikaa tietokoneen ääressä?")

        prog ++
    }else if(prog == 5){
        mark ++
        kass ++
        
        qesNode.innerText = ("Onko sinulla ajokortti ja haluaisit ajaa työksesi autoa?")

        prog ++
    }else if(prog == 6){
        houl ++

        qesNode.innerText = ("Oletko palveluhenkinen ja pidät työskentelystä erilaisten ihmisten kanssa?")

        prog ++
    }else if(prog == 7){
        kass ++

        qesNode.innerText = ("Oletko tarkka puhtaudestaja siisteydestä?")

        prog ++
    }else if(prog == 8){
        puhd ++
        cook ++

        qesNode.innerText = ("Haluatko tehdä töitä numeroiden parissa?")

        prog ++
    }else if(prog == 9){
        kass ++

        qesNode.innerText = ("Kiinnostaako sinua pyörittää vaatekauppaa?")

        prog ++
    }else if(prog == 10){
        kass ++

        qesNode.innerText = ("Oletko herkkä hajuille?")

        prog ++
    }else if(prog == 11){
        puhd ++

        qesNode.innerText = ("Kestätkö painetta työssä?")

        prog ++
    }else if(prog == 12){
        mark ++
        cook ++

        qesNode.innerText = ("Pidätkö mekaanisesta työstä?")

        prog ++
    }else if(prog == 13){
        puhd ++;

        qesNode.innerText = ("Oletko luova?")

        prog ++
    }else if(prog == 14){
        mark ++;

        qesNode.innerText = ("Koetko hygienian tärkeäksi?")

        prog ++
    }else if(prog == 15){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Kiinnostaako vaihtelevat työt ja projektit?")

        prog ++
    }else if(prog == 16){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Pidätkö samankaltaisista toistuvista töistä?")

        prog ++
    }else if(prog == 17){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Pidätkö kiinteistön hoidosta?")

        prog ++
    }else if(prog == 18){
        puhd ++;
        houl ++;

        qesNode.innerText = ("Tykkäätkö työskennellä yksin?")

        prog ++
    }else if(prog == 19){
        mark ++;
        puhd ++;
        cook ++;

        qesNode.innerText = ("Tykkäätkö työskennellä ryhmässä?")

        prog ++
    }else if(prog == 20){
        kass ++;
        houl ++;

        yeetPage()
    }


}

function yeetPage(){


    if (mark > puhd && mark > kass && mark > houl && mark > cook){
        window.location.href = "result2.php";
    }else if (puhd > mark && puhd > kass && puhd > houl && puhd > cook){
        window.location.href = "result3.php";
    }else if (kass > puhd && kass > mark && kass > houl && kass > cook){
        window.location.href = "result4.php";
    }else if (houl > puhd && houl > kass && houl > mark && houl > cook){
        window.location.href = "result1.php";
    }else if (cook > puhd && cook > kass && cook > houl && cook > mark){
        window.location.href = "result5.php";
    }
}