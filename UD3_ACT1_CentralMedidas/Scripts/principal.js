

var miCentralMedidas = new CentralMedidas();
var medidas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
miCentralMedidas.insertaMedidas("Santander",medidas);
miCentralMedidas.insertaAleatorio("Madrid");
console.table(miCentralMedidas.Medidas);
miCentralMedidas.mediaMedidas("Madrid");
miCentralMedidas.mediaMedidasTotal();
miCentralMedidas.eliminaCiudad("Santander");