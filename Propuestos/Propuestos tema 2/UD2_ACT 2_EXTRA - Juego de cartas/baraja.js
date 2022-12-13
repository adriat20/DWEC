class Baraja {
    // Propiedad cartas
    cartas;
  
    // Constructor
    constructor() {
      // Inicializar el array de cartas
      this._cartas = [];
  
      // Arreglo de palos
      const palos = ['CORAZONES', 'DIAMANTES', 'PICAS', 'TREBOLES'];
  
      // Arreglo de nombres
      const nombres = ['AS', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
      // Crear objetos de tipo Carta y agregarlos al array de cartas
      
    for (let i = 0; i < palos.length; i++) {
        const palo = palos[i];
        for (let j = 0; j < nombres.length; j++) {
          const nombre = nombres[j];
          this._cartas.push(new Carta(palo, nombre));
        }
    }}

    // Método generaCarta()
    generaCarta(){
      // Generar un número aleatorio entre 0 y el tamaño del array de cartas
      const index = Math.floor(Math.random() * this._cartas.length);
  
      // Devolver la carta en la posición aleatoria generada
      return this._cartas[index];
    }
  }


  const baraja = new Baraja();
  const carta = baraja.generaCarta();
  console.log(carta.toString()); // Imprime una carta aleatoria, como