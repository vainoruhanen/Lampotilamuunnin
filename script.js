

function muunna(){
var lampotila = Number((document.getElementById("lampotila").value));
var x = document.getElementById("yksikot");
var valittu = x.value;
var desimaaliMaara = 0;

if(document.getElementById("yksidesimaali").checked == true){
    desimaaliMaara = 1;
}

if(document.getElementById("kaksidesimaalia").checked == true){
    desimaaliMaara = 2;
}

if(document.getElementById("kolmedesimaalia").checked == true){
    desimaaliMaara = 3;
}


if(valittu == "Cel-Fah"){
    var muunnettu = lampotila * 1.8 + 32; 
    muunnettu = muunnettu.toFixed(desimaaliMaara);
    document.getElementById("tekstikentta").innerHTML = lampotila + "C = " + muunnettu + "F";
}else{
    var muunnettu = (lampotila - 32) * 0.5556;
    muunnettu = muunnettu.toFixed(desimaaliMaara);
    document.getElementById("tekstikentta").innerHTML = lampotila + "F = " + muunnettu + "C";
}
}
