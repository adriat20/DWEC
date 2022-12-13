class Carta {
    // Propiedades privadas
    palo;
    nombre;
  
    // Constructor
    constructor(palo, nombre) {
      this._palo = palo;
      this._nombre = nombre;
    }
  
    // Getters
    getPalo() {
      return this._palo;
    }
  
    getNombre() {
      return this._nombre;
    }
  
    // Setters
    setPalo(palo) {
      this._palo = palo;
    }
  
    setNombre(nombre) {
      this._nombre = nombre;
    }
  
    // Método toString()
    toString() {
      return ((this._nombre)-(this._palo))
    }
  }
  

  const carta = new Carta('PICAS', '2');
  console.log(carta.toString());
