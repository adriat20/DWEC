class PalabraOculta {

constructor(){
    this._palabras = ["perro","gato","ola","esternocleidomastoideo","comida","tortilla","marejada","sueño"];
    this._contadorJugadas = 1;
    this._contadorAciertos = 0;
    this._solucionActual = "";
}

get contadorJugadas() {
    return this.contadorJugadas;
}

set contadorJugadas(contadorJugadas) {
    this._contadorJugadas = contadorJugadas;
    
}


get contadorAciertos() {
    return this.contadorAciertos;
}

set contadorAciertos(contadorAciertos) {
    this._contadorAciertos = contadorAciertos;
    
}

get solucionActual() {
    return this.solucionActual;
}

set solucionActual(solucionActual) {
    this._solucionActual = solucionActual;
    
}


getPalabraDesordenada(){
    
    //almacenamos en posicion un numero al azar
    var posicion = Math.floor(Math.random() * (this._palabras.length));
    //guardamos en el array palabras la posicion al azar
    this._solucionActual = this._palabras[posicion];

    // ahora hay que desordenar la palabra

    
    /*getPalabraDesordenada que llama al array, lo desordena y
     la devuelve, y se llama desde el programa principal*/
}





}
