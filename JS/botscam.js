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
var cook = 0

//functiot

function noFunc(){


    if(prog == 0){
        mark = 0;
        puhd = 0;
        kass = 0;
        houl = 0;
        cook = 0;

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
    }


}