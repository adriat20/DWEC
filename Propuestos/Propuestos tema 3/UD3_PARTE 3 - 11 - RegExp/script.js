function validarNumero(telefono) {
    const regex = /^(\+?34|0034)?[6789]\d{8}$/;
    return regex.test(telefono);
  }
  
  console.log(validarNumero("(0034)666777888"));
  console.log(validarNumero("(+34)777888999")); 
  console.log(validarNumero("0034666777888")); 
  console.log(validarNumero("+34987654321"));  
  console.log(validarNumero("900123456")); 
  console.log(validarNumero("678678678"));  
  