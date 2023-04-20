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
var k1 = null;
var k2 = null;
var k3 = null;
var k4 = null;
var k5 = null;
var k6 = null;
var k7 = null;
var k8 = null;
var k9 = null;
var k10 = null;
var k11 = null;
var k12 = null;
var k13 = null;
var k14 = null;
var k15 = null;
var k16 = null;
var k17 = null;
var k18 = null;
var k19 = null;
var k20 = null;
var k21 = null;


//functiot

function noFunc(){

    if(prog == 0){

        qesNode.innerHTML = ("Kiinnostaisiko sinua ruumiillista ponniskelua teht" + A1 + "v" + A1 +" ty"+ O1 +"?")

        prog ++

        k1 = "n"
    }else if(prog == 1){
        mark ++;
        kass ++;

        qesNode.innerText = ("Oletko k" + A1 + "tev" + A1 + " k" + A1 + "sist" + A1 + "si ja hyv" + A1 + " kokoamaan huonekaluja?")

        prog ++

        k2 = "n"
    }else if(prog == 2){
        cook ++;
        puhd ++;
        mark ++;
        kass ++;
       
        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" ruoanlaitosta?")

        prog ++

        k3 = "n"
    }else if(prog == 3){
        houl ++;
        puhd ++;
        mark ++;
        kass ++;

        qesNode.innerText = ("Haaveiletko viestinn" + A1 + "n ja tiedottamisen parissa ty"+ O1 +"skentelyst" + A1 + "?")

        prog ++

        k4 = "n"
    }else if(prog == 4){
        houl ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Viet" + A1 + "tk"+ O1 +" mielell" + A1 + "si paljon aikaa tietokoneen " + A1 + "" + A1 + "ress" + A1 + "?")

        prog ++

        k5 = "n"
    }else if(prog == 5){
        puhd ++
        houl ++ 
        cook ++
        
        qesNode.innerText = ("Onko sinulla ajokortti ja haluaisit ajaa ty"+ O1 +"ksesi autoa?")

        prog ++

        k6 = "n"
    }else if(prog == 6){
        mark ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Oletko palveluhenkinen ja pid" + A1 + "t ty"+ O1 +"skentelyst" + A1 + " erilaisten ihmisten kanssa?")

        prog ++

        k7 = "n"
    }else if (prog == 7){
        puhd ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Oletko tarkka puhtaudestaja siisteydest" + A1 + "?")

        prog ++

        k8 = "n"
    }else if(prog == 8){
        mark ++
        kass ++
        houl ++

        qesNode.innerText = ("Haluatko tehd" + A1 + " t"+ O1 +"it" + A1 + " numeroiden parissa?")

        prog ++

        k9 = "n"
    }else if(prog == 9){
        puhd ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Kiinnostaako sinua py"+ O1 +"ritt" + A1 + "" + A1 + " vaatekauppaa?")

        prog ++

        k10 = "n"
    }else if(prog == 10){
        puhd ++
        cook ++
        mark ++
        houl ++
        
        qesNode.innerText = ("Oletko herkk" + A1 + " hajuille?")

        prog ++

        k11 = "n"
    }else if(prog == 11){
        kass ++
        cook ++
        mark ++
        houl ++
        
        qesNode.innerText = ("Kest" + A1 + "tk"+ O1 +" painetta ty"+ O1 +"ss" + A1 + "?")

        prog ++

        k12 = "n"
    }else if(prog == 12){
        puhd = 1;
        kass = 1;
        houl = 1;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" mekaanisesta ty"+ O1 +"st" + A1 + "?")

        prog ++

        k13 = "n"
    }else if(prog == 13){
        kass ++
        cook ++
        mark ++
        houl ++

        qesNode.innerText = ("Oletko luova?")

        prog ++

        k14 = "n"
    }else if(prog == 14){
        houl ++;
        puhd ++;
        cook ++;
        kass ++;

        qesNode.innerText = ("Koetko hygienian t" + A1 + "rke" + A1 + "ksi?")

        prog ++

        k15 = "n"
    }else if(prog == 15){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Kiinnostaako vaihtelevat ty"+ O1 +"t ja projektit?")

        prog ++

        k16 = "n"
    }else if(prog == 16){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" samankaltaisista toistuvista t"+ O1 +"ist" + A1 + "?")

        prog ++

        k17 = "n"
    }else if(prog == 17){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" kiinteist"+ O1 +"n hoidosta?")

        prog ++

        k18 = "n"
    }else if(prog == 18){
        mark ++;
        kass ++;
        cook ++;

        qesNode.innerText = ("Tykk" + A1 + "" + A1 + "tk"+ O1 +" ty"+ O1 +"skennell" + A1 + " yksin?")

        prog ++

        k19 = "n"
    }else if(prog == 19){
        kass ++;
        houl ++;

        qesNode.innerText = ("Tykk" + A1 + "" + A1 + "tk"+ O1 +" ty"+ O1 +"skennell" + A1 + " ryhm" + A1 + "ss" + A1 + "?")

        prog ++

        k20 = "n"
    }else if(prog == 20){
        mark ++;
        puhd ++;
        cook ++;

        k21 = "n"

        prog++
        setTimeout(yeetPage, 500);
    }

    document.getElementById("progBar").setAttribute("style", "width: " + prog / 21 * 100 + "%;");
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

        k1 = "k"
    }else if(prog == 1){
        houl ++;
        cook ++;
        puhd ++;
       
        qesNode.innerText = ("Oletko k" + A1 + "tev" + A1 + " k" + A1 + "sist" + A1 + "si ja hyv" + A1 + " kokoamaan huonekaluja?")

        prog ++

        k2 = "k"
    }else if(prog == 2){
        houl ++; 

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" ruoanlaitosta?")

        prog ++

        k3 = "k"
    }else if(prog == 3){
        cook ++;

        qesNode.innerText = ("Haaveiletko viestinn" + A1 + "n ja tiedottamisen parissa ty"+ O1 +"skentelyst" + A1 + "?")

        prog ++

        k4 = "k"
    }else if(prog == 4){
        mark ++

        qesNode.innerText = ("Viet" + A1 + "tk"+ O1 +" mielell" + A1 + "si paljon aikaa tietokoneen " + A1 + "" + A1 + "ress" + A1 + "?")

        prog ++

        k5 = "k"
    }else if(prog == 5){
        mark ++
        kass ++
        
        qesNode.innerText = ("Onko sinulla ajokortti ja haluaisit ajaa ty"+ O1 +"ksesi autoa?")

        prog ++

        k6 = "k"
    }else if(prog == 6){
        houl ++

        qesNode.innerText = ("Oletko palveluhenkinen ja pid" + A1 + "t ty"+ O1 +"skentelyst" + A1 + " erilaisten ihmisten kanssa?")

        prog ++

        k7 = "k"
    }else if(prog == 7){
        kass ++

        qesNode.innerText = ("Oletko tarkka puhtaudestaja siisteydest" + A1 + "?")

        prog ++

        k8 = "k"
    }else if(prog == 8){
        puhd ++
        cook ++

        qesNode.innerText = ("Haluatko tehd" + A1 + " t"+ O1 +"it" + A1 + " numeroiden parissa?")

        prog ++

        k9 = "k"
    }else if(prog == 9){
        kass ++

        qesNode.innerText = ("Kiinnostaako sinua py"+ O1 +"ritt" + A1 + "" + A1 + " vaatekauppaa?")

        prog ++

        k10 = "k"
    }else if(prog == 10){
        kass ++

        qesNode.innerText = ("Oletko herkk" + A1 + " hajuille?")

        prog ++

        k11 = "i"
    }else if(prog == 11){
        puhd ++

        qesNode.innerText = ("Kest" + A1 + "tk"+ O1 +" painetta ty"+ O1 +"ss" + A1 + "?")

        prog ++

        k12 = "k"
    }else if(prog == 12){
        mark ++
        cook ++

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" mekaanisesta ty"+ O1 +"st" + A1 + "?")

        prog ++

        k13 = "k"
    }else if(prog == 13){
        puhd ++;

        qesNode.innerText = ("Oletko luova?")

        prog ++

        k14 = "k"
    }else if(prog == 14){
        mark ++;

        qesNode.innerText = ("Koetko hygienian t" + A1 + "rke" + A1 + "ksi?")

        prog ++

        k15 = "k"
    }else if(prog == 15){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Kiinnostaako vaihtelevat ty"+ O1 +"t ja projektit?")

        prog ++

        k16 = "k"
    }else if(prog == 16){
        mark ++;
        kass ++;
        houl ++;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" samankaltaisista toistuvista t"+ O1 +"ist" + A1 + "?")

        prog ++

        k17 = "k"
    }else if(prog == 17){
        puhd ++;
        cook ++;

        qesNode.innerText = ("Pid" + A1 + "tk"+ O1 +" kiinteist"+ O1 +"n hoidosta?")

        prog ++

        k18 = "k"
    }else if(prog == 18){
        puhd ++;
        houl ++;

        qesNode.innerText = ("Tykk" + A1 + "" + A1 + "tk"+ O1 +" ty"+ O1 +"skennell" + A1 + " yksin?")

        prog ++

        k19 = "k"
    }else if(prog == 19){
        mark ++;
        puhd ++;
        cook ++;

        qesNode.innerText = ("Tykk" + A1 + "" + A1 + "tk"+ O1 +" ty"+ O1 +"skennell" + A1 + " ryhm" + A1 + "ss" + A1 + "?")

        prog ++

        k20 = "k"
    }else if(prog == 20){
        kass ++;
        houl ++;

        k21 = "k"

        prog++
        setTimeout(yeetPage, 500);
    }

    document.getElementById("progBar").setAttribute("style", "width: " + prog / 21 * 100 + "%;");
}

function yeetPage(){

    if(prog == 21){

    
        document.cookie = "k1 = " + k1;
        document.cookie = "k1 = " + k2;
        document.cookie = "k1 = " + k3;
        document.cookie = "k1 = " + k4;
        document.cookie = "k1 = " + k5;
        document.cookie = "k1 = " + k6;
        document.cookie = "k1 = " + k7;
        document.cookie = "k1 = " + k8;
        document.cookie = "k1 = " + k9;
        document.cookie = "k1 = " + k10;
        document.cookie = "k1 = " + k11;
        document.cookie = "k1 = " + k12;
        document.cookie = "k1 = " + k13;
        document.cookie = "k1 = " + k14;
        document.cookie = "k1 = " + k15;
        document.cookie = "k1 = " + k16;
        document.cookie = "k1 = " + k17;
        document.cookie = "k1 = " + k18;
        document.cookie = "k1 = " + k19;
        document.cookie = "k1 = " + k20;
        document.cookie = "k1 = " + k21;

    

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
    var f1 = document.getElementById("name").value;

    if(f1 != ""){
        document.cookie = "formVanish = true";
    }else{
        document.cookie = "formVanish = false";
    }

    
}




function checkCookie() {
    let van = getCookie("formVanish");
    if (van == "true") {
        formNode.removeChild(formNode.firstElementChild);

        var msg = document.createElement('h1');
        formNode.appendChild(msg);
        msg.innerText = "Kiitos ilmoitautumisesta!"

        document.getElementById("fade").style.visibility = "hidden";
        document.getElementById("fade2").style.visibility = "hidden";

      document.cookie = "formVanish =; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }else if(van == "false"){
        var warn = document.createElement('div');
        warn.setAttribute('class','alert alert-danger');
        document.getElementById("warn").appendChild(warn);
        warn.innerHTML = "<strong>varoitus</strong> teksti kent&auml;t ovat tyhji&auml;."

        document.cookie = "formVanish =; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
  }