var miConvertidor;

window.addEventListener("load",iniciaConvertidor);
window.addEventListener("unload",cierraConvertidor);

function iniciaConvertidor(){
//Manejadores de factores conversores
document.getElementById("hex-to-rgb").addEventListener("click",hexadecimal);
document.getElementById("rgb-to-hex").addEventListener("click",RGBHexadecimal);
/*Los valores iniciales de los campos deberian ser los correspondientes:
    -Blanco: para ello en el evento de carga de pagina tendremos que instanciar un
        nuevo objeto de tipo Color (constructor sin parametros)*/

// -- COMPROBAMOS LA COOKIE --
        
// si existe el valor cookie
if(getCookie("valorHexadecimal"))
// el valor de la cookie es con lo que se inicializa el convertidor
miConvertidor = new Color(getCookie("valorHexadecimal"));

else{
    miConvertidor=new Color();
}


document.getElementById("red").value = miConvertidor.getRojo();
document.getElementById("green").value = miConvertidor.getVerde();
document.getElementById("blue").value = miConvertidor.getAzul();

//me devuelve el #
document.getElementById("hexadecimal").value = miConvertidor.ValorHex.slice(1);
document.getElementById("hexadecimal").focus();
document.getElementById("muestra").style.background = miConvertidor.ValorHex;
}

function hexadecimal(){
//tengo que enlazar el campo hexadecimal con miConvertidor y luego llamar a los campos de colores 

//llamamos al set de mi convertidor para poder acceder al valor del campo
miConvertidor.ValorHex = "#"+document.getElementById("hexadecimal").value

document.getElementById("red").value = miConvertidor.getRojo();
document.getElementById("green").value = miConvertidor.getVerde();
document.getElementById("blue").value = miConvertidor.getAzul();

document.getElementById("muestra").style.background = miConvertidor.ValorHex;
    
}

function cierraConvertidor(){
      
     // Guarda el valor hexadecimal en la cookie 
     guardarValorCookie(miConvertidor.ValorHex);
  
}
function RGBHexadecimal(){
    
    //creamos una variable para cada campo para que sea mas facil trabajar con ello
    let rojo = parseInt(document.getElementById("red").value);
    let verde = parseInt(document.getElementById("green").value);
    let azul = parseInt(document.getElementById("blue").value);
    
    //llamamos al set de miConvertidor y almacenamos las variables anteriores en un array 
    miConvertidor.ValorRGB = [rojo,verde,azul];
    //el campo hexadecimal con su valor se iguala al set
    document.getElementById("hexadecimal").value = miConvertidor.ValorHex.slice(1);

    document.getElementById("muestra").style.background = miConvertidor.ValorHex;
}

    function guardarValorCookie(valorHexadecimal) {
        // Establece el nombre de la cookie
        var cookieName = "valorHexadecimal";
      
        // Establece el número de días que durará la cookie
        var cookieExpireDays = 1;
      
        // Usa la función setCookie() para establecer el valor de la cookie
        setCookie(cookieName, valorHexadecimal, cookieExpireDays);
      }
      

      function recuperarValorCookie() {
        // Establece el nombre de la cookie
        var nombreCookie = "valorHexadecimal";
      
        // Usa la función getCookie() para obtener el valor de la cookie
        var valorHexadecimal = getCookie(nombreCookie);
      
       return valorHexadecimal
      }
      


    function setCookie(nombre,valor,expiracion){


        var hoy= new Date()
        var d = new Date()
        //calcula el dia que caduca la cookie, pasandolo a milisegundos
        d.setTime(hoy.getTime()+expiracion*24*60*60*1000);
    
        var expiracion = "expires="+d.toUTCString();
    
        document.cookie = nombre+"="+valor+";"+expiracion+";path=/";
    }
    
    function getCookie(nomCookie) {
        var cook=document.cookie.split(";"); // pares de valores
        for (var i=0; i<cook.length; i++) { // revisamos todos los pares
        var n = cook[i].split("="); // separamos nombre/valor
        var nombre=n[0];
        var valor =n[1];
        if (nombre.trim()==nomCookie.trim()) // si es el buscado
        return valor;// devolvemos su valor
        }
        return null; // si no se encuentra = nulo
       }