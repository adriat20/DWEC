function creaPassword(nombre) {
    // Divide el nombre en un array de letras
    let letras = nombre.split("");
  
    // Inicializa una variable para almacenar el resultado
    let resultado = "";
  
    // Itera a través de las letras y agregar el número de su posición a cada una
    for (let i = 0; i < letras.length; i++) {
      resultado += letras[i] + (i + 1);
    }
  
    // Devuelve el resultado
    return resultado;
  }
  
  // Ejemplo:
  console.log(creaPassword("Maria"));
  