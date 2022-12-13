window.addEventListener("load",principal);
var miJuego = new PalabraOculta();


function principal(){

// nueva solucion finalizar
document.querySelector("#letras").value = miJuego.getPalabraDesordenada();
document.querySelector("#nueva").addEventListener("click",pulsaNuevaPalabra)
document.querySelector("#solucion").addEventListener("click",pulsaSolucion)
document.querySelector("#finalizar").addEventListener("click",pulsaFinalizar);
}

function pulsaNuevaPalabra(){

    var pulsar = document.getElementById("nueva").value
   

    if(pulsar)
        alert("aqui haria algo")
    else
        alert("no hace nada")

}

function pulsaSolucion(){
    var pulsar = document.getElementById("solucion").value
    if(pulsar)
        alert("aqui haria algo")
    else
        alert("no hace nada")

}


function pulsaFinalizar(){

    var pulsar = document.getElementById("finalizar").value

    if(pulsar)
        alert("aqui haria algo")
    else
        alert("no hace nada")

}












function finalizar(){
    deshabilita(this.id);
    deshabilita('nueva');
    deshabilita('solucion');

    document.getElementById('letras').value="";
    document.getElementById('palabra').value ="";
    
    deshabilita('letras');
    deshabilita('palabra');

    var porcentaje = document.getElementById('porcentaje');
    porcentaje.innerHTML += (palabra.Aciertos / palabra.Partidas *100).toFixed
    document.getElementById('porcentaje').style.visibility='visible';





}