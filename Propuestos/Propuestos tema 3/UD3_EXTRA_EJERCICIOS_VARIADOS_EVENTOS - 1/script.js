// Cuenta el número de enlaces, párrafos e imágenes de la página
var numEnlaces = document.querySelectorAll("a").length;
var numParrafos = document.querySelectorAll("p").length;
var numImagenes = document.querySelectorAll("img").length;

// Cuenta el número de enlaces cuya URL contiene la palabra “naranco”
var numEnlacesNaranco = 0;
var enlaces = document.querySelectorAll("a");
for (var i = 0; i < enlaces.length; i++) {
  if (enlaces[i].href.indexOf("naranco") != -1) {
    numEnlacesNaranco++;
  }
}

// Cuenta el número de imágenes del tercer párrafo
var parrafos = document.querySelectorAll("p");
var numImagenesParrafo3 = parrafos[2].querySelectorAll("img").length;

// Comprueba si hay alguna imagen con el atributo alt vacío
let img = document.querySelectorAll("img");

// Bucle para iterar sobre cada una de las imágenes
for (let i = 0; i < img.length; i++) {
  let img = img[i];

  // Comprobar si el atributo alt está vacío
  if (img.alt === "") {
    console.log("La imagen en la posición " + i + " tiene el atributo alt vacío");
  }
}
