var definerNode = document.getElementById('definer');
var changerNode = document.getElementById('changer');
var switcher = document.querySelectorAll('.precise');
var tables = document.querySelectorAll('td');


for (let i = 0; i < tables.length; i++) {
    if(tables[i].innerText == "k"){
        tables[i].style.backgroundColor = "green";
    }else if(tables[i].innerText == "e"){
        tables[i].style.backgroundColor = "red";
    }
}

definerNode.addEventListener("change",turner);


function turner(){
    if(definerNode.value == "knimi"){
        changerNode.removeChild(changerNode.firstElementChild);

        var input = document.createElement('input');
        input.setAttribute('class','form-control mt-3');
        input.setAttribute('type','text');
        input.setAttribute('id','find');
        input.setAttribute('name','find');
        input.setAttribute('placeholder','etsi');
        changerNode.appendChild(input);

        for (let i = 0; i < switcher.length; i++) {
            switcher[i].style.display = "initial";
        }

    }else if(definerNode.value == "luokka"){
        changerNode.removeChild(changerNode.firstElementChild);

        var select = document.createElement('select');
        select.setAttribute('class','form-select mt-3');
        select.setAttribute('name','find');
        select.setAttribute('id','find');
        changerNode.appendChild(select);

        var opt1 = document.createElement('option');
        opt1.setAttribute('name','houla');
        opt1.setAttribute('value','houla');
        select.appendChild(opt1);
        opt1.innerText = "höylä";

        var opt2 = document.createElement('option');
        opt2.setAttribute('name','markkinointi');
        opt2.setAttribute('value','markkinointi');
        select.appendChild(opt2);
        opt2.innerText = "markkinointi";

        var opt3 = document.createElement('option');
        opt3.setAttribute('name','puhdistaja');
        opt3.setAttribute('value','puhdistaja');
        select.appendChild(opt3);
        opt3.innerText = "puhdistaja";

        var opt4 = document.createElement('option');
        opt4.setAttribute('name','kassa');
        opt4.setAttribute('value','kassa');
        select.appendChild(opt4);
        opt4.innerText = "kassa";

        var opt5 = document.createElement('option');
        opt5.setAttribute('name','kokki');
        opt5.setAttribute('value','kokki');
        select.appendChild(opt5);
        opt5.innerText = "kokki";

        for (let i = 0; i < switcher.length; i++) {
            switcher[i].style.display = "none";
        }

    }else if(definerNode.value == "mov"){
        changerNode.removeChild(changerNode.firstElementChild);

        var date = document.createElement('input');
        date.setAttribute('class','form-control mt-3');
        date.setAttribute('type','date');
        date.setAttribute('id','find');
        date.setAttribute('name','find');
        date.setAttribute('placeholder','etsi');
        changerNode.appendChild(date);

        for (let i = 0; i < switcher.length; i++) {
            switcher[i].style.display = "none";
        }
    }
}

