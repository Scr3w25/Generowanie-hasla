var iloscZn=8;
var iloscCyfr=0;
var iloscMaleL=0;
var iloscWolnychZn=0;

function iloscZnakow(){
    iloscZn=document.getElementById("iloscZnakow").value;

    ustaWolne();
}

function wybCyfr(){
    iloscCyfr=document.getElementById("iloscCyfr").value;
    document.getElementById("wybCyfr").value=iloscCyfr;
    ustaWolne();
}
function wybMaleL(){
    iloscMaleL=document.getElementById("iloscMaleL").value;
    document.getElementById("wybMaleL").value=iloscMaleL;
    ustaWolne();
}
function wybZnakowS(){
    iloscMaleL=document.getElementById("iloscZnakowS").value;
    document.getElementById("wybZnakowS").value=iloscZnakowS;
    ustaWolne();
}
function wybierzDuzychL(){
        iloscMaleL=document.getElementById("iloscDuzychL").value;
        document.getElementById("wybierzDuzychL").value=iloscDuzychL;
        ustaWolne();
}
function ustaWolne(){
    iloscWolnychZn=iloscZn-iloscCyfr-iloscMaleL;
    document.getElementById("test").value=iloscWolnychZn;
    document.getElementById("iloscCyfr").max=+iloscCyfr+ +iloscWolnychZn;
    document.getElementById("iloscMaleL").max=+iloscMaleL+ +iloscWolnychZn;
    document.getElementById("iloscZnakowS").max=+iloscZnakowS+ +iloscWolnychZn;
    document.getElementById("iloscDuzychL").max=+iloscDuzychL+ +iloscWolnychZn;
}