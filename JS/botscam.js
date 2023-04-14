//nodet
var nopeNode = document.getElementById("Nah");
var yepNode = document.getElementById("Aye");
var qesNode = document.getElementById("ques");
var formNode = document.getElementById("forme");
var A1 = document.getElementById("a1").innerText;
var O1 = document.getElementById("o1").innerText;

//varit
var mark = 0;
var puhd = 0;
var kass = 0;
var houl = 0;
var prog = 0;
var cook = 0;
var yems = 0;
var nyo = 0;

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

hover(yepNode, e => { //e elementti väittä turhuuttua mutta koodi ei toimi ilman sitä
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

        qesNode.innerHTML = ("Kiinnostaisiko sinua ruumiillista ponniskelua teht" + A1 + "v" + A1 +" ty"+ O1 +"?")

        prog ++

        nyo ++
    }else if(prog == 1){
        mark ++;
        kass ++;

        qesNode.innerText = ("Oletko k" + A1 + "tev" + A1 + " k" + A1 + "sist" + A1 + "si ja hyv" + A1 + " kokoamaan huonekaluja?")

        prog ++

        nyo ++
    }else if(prog == 2){
        cook ++;
        puhd ++;
        mark ++;
        kass ++;
       
        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" ruoanlaitosta?")

        prog ++

        nyo ++
    }else if(prog == 3){
        houl ++;
        puhd ++;
        mark ++;
        kass ++;

        qesNode.innerText = ("Haaveiletko viestinn" + A1 + "n ja tiedottamisen parissa ty"+ O1 +"skentelyst" + A1 + "?")

        prog ++

        nyo ++
    }else if(prog == 4){
        houl ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Viet" + A1 + "tk"+ O1 +" mielell" + A1 + "si paljon aikaa tietokoneen " + A1 + "" + A1 + "ress" + A1 + "?")

        prog ++

        nyo ++
    }else if(prog == 5){
        puhd ++
        houl ++ 
        cook ++
        
        qesNode.innerText = ("Onko sinulla ajokortti ja haluaisit ajaa ty"+ O1 +"ksesi autoa?")

        prog ++

        nyo ++
    }else if(prog == 6){
        mark ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Oletko palveluhenkinen ja pid" + A1 + "t ty"+ O1 +"skentelyst" + A1 + " erilaisten ihmisten kanssa?")

        prog ++

        nyo ++
    }else if (prog == 7){
        puhd ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Oletko tarkka puhtaudestaja siisteydest" + A1 + "?")

        prog ++

        nyo ++
    }else if(prog == 8){
        mark ++
        kass ++
        houl ++

        qesNode.innerText = ("Haluatko tehd" + A1 + " t"+ O1 +"it" + A1 + " numeroiden parissa?")

        prog ++

        nyo ++
    }else if(prog == 9){
        puhd ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Kiinnostaako sinua py"+ O1 +"ritt" + A1 + "" + A1 + " vaatekauppaa?")

        prog ++

        nyo ++
    }else if(prog == 10){
        puhd ++
        cook ++
        mark ++
        houl ++
        
        qesNode.innerText = ("Oletko herkk" + A1 + " hajuille?")

        prog ++

        nyo ++
    }else if(prog == 11){
        kass ++
        cook ++
        mark ++
        houl ++
        
        qesNode.innerText = ("Kest" + A1 + "tk"+ O1 +" painetta ty"+ O1 +"ss" + A1 + "?")

        prog ++

        nyo ++
    }else if(prog == 12){
        puhd = 1;
        kass = 1;
        houl = 1;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" mekaanisesta ty"+ O1 +"st" + A1 + "?")

        prog ++

        nyo ++
    }else if(prog == 13){
        kass ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Oletko luova?")

        prog ++

        nyo ++
    }else if(prog == 14){
        houl ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Koetko hygienian t" + A1 + "rke" + A1 + "ksi?")

        prog ++

        nyo ++
    }else if(prog == 15){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Kiinnostaako vaihtelevat ty"+ O1 +"t ja projektit?")

        prog ++

        nyo ++
    }else if(prog == 16){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" samankaltaisista toistuvista t"+ O1 +"ist" + A1 + "?")

        prog ++

        nyo ++
    }else if(prog == 17){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" kiinteist"+ O1 +"n hoidosta?")

        prog ++

        nyo ++
    }else if(prog == 18){
        mark ++;
        kass ++;
        cook ++;

        qesNode.innerText = ("Tykk" + A1 + "" + A1 + "tk"+ O1 +" ty"+ O1 +"skennell" + A1 + " yksin?")

        prog ++

        nyo ++
    }else if(prog == 19){
        kass ++;
        houl ++;

        qesNode.innerText = ("Tykk" + A1 + "" + A1 + "tk"+ O1 +" ty"+ O1 +"skennell" + A1 + " ryhm" + A1 + "ss" + A1 + "?")

        prog ++

        nyo ++
    }else if(prog == 20){
        mark ++;
        puhd ++;
        cook ++;

        nyo ++

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

        qesNode.innerText = ("Kiinnostaisiko sinua ruumiillista ponniskelua teht" + A1 + "v" + A1 + " ty"+ O1 +"?")

        prog ++

        yems ++
    }else if(prog == 1){
        houl ++;
        cook ++;
        puhd ++;
       
        qesNode.innerText = ("Oletko k" + A1 + "tev" + A1 + " k" + A1 + "sist" + A1 + "si ja hyv" + A1 + " kokoamaan huonekaluja?")

        prog ++

        yems ++
    }else if(prog == 2){
        houl ++; 

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" ruoanlaitosta?")

        prog ++

        yems ++
    }else if(prog == 3){
        cook ++;

        qesNode.innerText = ("Haaveiletko viestinn" + A1 + "n ja tiedottamisen parissa ty"+ O1 +"skentelyst" + A1 + "?")

        prog ++

        yems ++
    }else if(prog == 4){
        mark ++

        qesNode.innerText = ("Viet" + A1 + "tk"+ O1 +" mielell" + A1 + "si paljon aikaa tietokoneen " + A1 + "" + A1 + "ress" + A1 + "?")

        prog ++

        yems ++
    }else if(prog == 5){
        mark ++
        kass ++
        
        qesNode.innerText = ("Onko sinulla ajokortti ja haluaisit ajaa ty"+ O1 +"ksesi autoa?")

        prog ++

        yems ++
    }else if(prog == 6){
        houl ++

        qesNode.innerText = ("Oletko palveluhenkinen ja pid" + A1 + "t ty"+ O1 +"skentelyst" + A1 + " erilaisten ihmisten kanssa?")

        prog ++

        yems ++
    }else if(prog == 7){
        kass ++

        qesNode.innerText = ("Oletko tarkka puhtaudestaja siisteydest" + A1 + "?")

        prog ++

        yems ++
    }else if(prog == 8){
        puhd ++
        cook ++

        qesNode.innerText = ("Haluatko tehd" + A1 + " t"+ O1 +"it" + A1 + " numeroiden parissa?")

        prog ++

        yems ++
    }else if(prog == 9){
        kass ++

        qesNode.innerText = ("Kiinnostaako sinua py"+ O1 +"ritt" + A1 + "" + A1 + " vaatekauppaa?")

        prog ++

        yems ++
    }else if(prog == 10){
        kass ++

        qesNode.innerText = ("Oletko herkk" + A1 + " hajuille?")

        prog ++

        yems ++
    }else if(prog == 11){
        puhd ++

        qesNode.innerText = ("Kest" + A1 + "tk"+ O1 +" painetta ty"+ O1 +"ss" + A1 + "?")

        prog ++

        yems ++
    }else if(prog == 12){
        mark ++
        cook ++

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" mekaanisesta ty"+ O1 +"st" + A1 + "?")

        prog ++

        yems ++
    }else if(prog == 13){
        puhd ++;

        qesNode.innerText = ("Oletko luova?")

        prog ++

        yems ++
    }else if(prog == 14){
        mark ++;

        qesNode.innerText = ("Koetko hygienian t" + A1 + "rke" + A1 + "ksi?")

        prog ++

        yems ++
    }else if(prog == 15){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Kiinnostaako vaihtelevat ty"+ O1 +"t ja projektit?")

        prog ++

        yems ++
    }else if(prog == 16){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" samankaltaisista toistuvista t"+ O1 +"ist" + A1 + "?")

        prog ++

        yems ++
    }else if(prog == 17){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" kiinteist"+ O1 +"n hoidosta?")

        prog ++

        yems ++
    }else if(prog == 18){
        puhd ++;
        houl ++;

        qesNode.innerText = ("Tykk" + A1 + "" + A1 + "tk"+ O1 +" ty"+ O1 +"skennell" + A1 + " yksin?")

        prog ++

        yems ++
    }else if(prog == 19){
        mark ++;
        puhd ++;
        cook ++;

        qesNode.innerText = ("Tykk" + A1 + "" + A1 + "tk"+ O1 +" ty"+ O1 +"skennell" + A1 + " ryhm" + A1 + "ss" + A1 + "?")

        prog ++

        yems ++
    }else if(prog == 20){
        kass ++;
        houl ++;

        yems ++

        yeetPage()
    }


}

function yeetPage(){

    document.cookie = "ayeCookie = " + yems;
    document.cookie = "nahCookie = " + nyo;


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

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function maekCook(){
    document.cookie = "formVanish = true";
}

if(getCookie("formVanish") == "true"){

    console.log = "yeet"
}