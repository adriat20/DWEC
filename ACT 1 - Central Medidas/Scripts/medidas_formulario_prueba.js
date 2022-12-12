window.addEventListener("load",principal);
var miCentralMedidas = new CentralMedidas();

function cargaPagina(){
    principal();
    resetFormulario();
}

function principal(){
    document.getElementById("guardar").addEventListener("click",pulsaGuarda);
    //document.getElementById("guardar").addEventListener("click",pulsaBorra);

    document.getElementById("ciudad").addEventListener("keyup",inputMayuscula);
    document.getElementById("medidas_aleatorio").addEventListener("click",seleccionarAleatorio)
    document.getElementById("medidas_manual").addEventListener("click",seleccionarManual)
    // var botonesGenerarMedidas = document.getElementById("tipo");


}
function inputMayuscula(evento){
    /*llamamos al ultimo elemento con el que interactuamos y su value(valor), lo igualamos
     y convertimos a mayusculas con la funcion toUpperCase*/

    evento.currentTarget.value= evento.currentTarget.value.toUpperCase();
// this.value = this.value.toUpperCase();
}

function convertirMedidas(cadenaMedidas){
let arrayNumeros;
//convertimos el parametro en un array de cadenas separadas por comas
var arrayCadenas=cadenaMedidas.split(",");
// AHORA CADENAMEDIDAS ES UN ARRAY DE STRINGS;

// Recorremos y parseamos el arrayCadenas y lo convertimos en un Array de numeros enteros;
arrayNumeros = Array.from(arrayCadenas, x => parseInt(x))


return arrayNumeros;

}

function pulsaGuarda(){
                                        //trim() quita los espacios
    var ciudad = document.getElementById("ciudad").value.trim(); 
    var medidas = convertirMedidas(document.getElementById("medidas").value);
    miCentralMedidas.insertaMedidas(ciudad,medidas);
    
    document.getElementById("tabla-medidas").style.display = "block";
    document.getElementById("tabla-medidas").innerHTML = miCentralMedidas.toHTML();

}

    


    function seleccionarAleatorio(){
    //Obtenemos el campo medidas(texArea) y su valor
    
    document.getElementById("medidas").value="";
    
    //si el valor del campo radio es aleatorio
    
        // llamas a la funcion genera aleatorio de micentralMedidas
        var nuevasMedidas = miCentralMedidas.generaNAleatorios(30,-10,40);
        //El campo de medidas se rellenara de forma aleatoria
        document.getElementById("medidas").value=nuevasMedidas;
        //Pasara a mostrarse el campo, ya que en el CSS aparece oculto 
        document.getElementById("medidas").disabled = true;
    }
      
    

    function seleccionarManual(){
            document.getElementById("medidas").value="";
            //Sacamos el campo medidas que sera en el que se centre la funcion 
            document.getElementById("medidas").focus();
            //El campo no se mostrara 
            document.getElementById("medidas").disabled=false;
        }
    


function limpiarCampo(campo){
//En el campo introducido, obtenemos el valor que esta vacio
document.getElementById(campo).value="";
//La funcion se centrara en el campo introducido
document.getElementById(campo).focus()
}

function mostrarCapa(capa,mensaje){

document.addEventListener(capa).style.display = block;
document.addEventListener(capa).innerHTML(mensaje)
}

function ocultarCapa(capa){
    document.getElementById(capa).style.display = none;
} 

function pulsaBorrar(){
// borra la ciudad
    document.getElementById("ciudad").value;
    if(miCentralMedidas.eliminaCiudad(ciudad)){
        resetFormulario();
    }
    else{
        mostrarCapa("Errores","La ciudad <strong>"+ciudad+"</strong> no existe");
        limpiarCampo("ciudad")
    }
    

}

