function Somar() {
    const valor1 = document.getElementById("valor");
    var refri = parseFloat(valor1.value) * 600/1000;
    document.querySelector("#refri").value = refri+"L";
    var agua = parseFloat(valor1.value) * 200/1000;
    document.querySelector("#agua").value = agua+"L";
    var bolo =  parseFloat(valor1.value) * 100/1000;
    document.querySelector("#bolo").value = bolo+"Kg";
    var doce =  parseFloat(valor1.value) * 3;
    document.querySelector("#doce").value = doce+" Unidades";
    var salgado = parseFloat(valor1.value) * 10;
    document.querySelector("#salgadinhos").value = salgado + " Salgados";
}


