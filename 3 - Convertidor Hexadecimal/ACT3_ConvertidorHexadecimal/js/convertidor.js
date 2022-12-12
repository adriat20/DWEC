var miConvertidor;

window.addEventListener("load",iniciaConvertidor);
// window.addEventListener("unload",cierraConvertidor);

function iniciaConvertidor(){
//Manejadores de factores conversores
document.getElementById("hex-to-rgb").addEventListener("click",hexadecimal);
document.getElementById("rgb-to-hex").addEventListener("click",RGBHexadecimal);
/*Los valores iniciales de los campos deberian ser los correspondientes:
    -Blanco: para ello en el evento de carga de pagina tendremos que instanciar un
        nuevo objeto de tipo Color (constructor sin parametros)*/
miConvertidor = new Color();

document.getElementById("red").value = miConvertidor.getRojo();
document.getElementById("green").value = miConvertidor.getVerde();
document.getElementById("blue").value = miConvertidor.getAzul();

//me devuelve el #
document.getElementById("hexadecimal").value = miConvertidor.ValorHex;
document.getElementById("hexadecimal").focus();
document.getElementById("muestra").style.background = miConvertidor.ValorHex;
}

function hexadecimal(){
//tengo que enlazar el campo hexadecimal con miConvertidor y luego llamar a los campos de colores 

//llamamos al set de mi convertidor para poder acceder al valor del campo
miConvertidor.ValorHex = document.getElementById("hexadecimal").value

document.getElementById("red").value = miConvertidor.getRojo();
document.getElementById("green").value = miConvertidor.getVerde();
document.getElementById("blue").value = miConvertidor.getAzul();

document.getElementById("muestra").style.background = miConvertidor.ValorHex;
    
}


function RGBHexadecimal(){
    
    //creamos una variable para cada campo para que sea mas facil trabajar con ello
    let rojo = parseInt(document.getElementById("red").value);
    let verde = parseInt(document.getElementById("green").value);
    let azul = parseInt(document.getElementById("blue").value);
    
    //llamamos al set de miConvertidor y almacenamos las variables anteriores en un array 
    miConvertidor.ValorRGB = [rojo,verde,azul];
    //el campo hexadecimal con su valor se iguala al set
    document.getElementById("hexadecimal").value = miConvertidor.ValorHex;

    document.getElementById("muestra").style.background = miConvertidor.ValorHex;
}
