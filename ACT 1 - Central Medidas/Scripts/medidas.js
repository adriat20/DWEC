  class CentralMedidas{

    constructor(){

     this._medidas = [];
    }

    get Medidas() {
        return this._medidas;
    }
    
    set Medidas(medidas) {
        this._medidas = medidas;
        
    }
    // generamos una ciudad en la primera columna
    obtieneIdCiudad(ciudad){
        for(let i=0; i<this._medidas.length;i++){
            if(this._medidas[i][0] == ciudad){
                return i;
            }
        }
        return null;
        }

    insertaMedidas(ciudad,valores){
    // creas una variable a la que le metes un array de 1 posicion
    // metemos nada mas la ciudad
        var fila = new Array(1);
        // la posicion 0 es la ciudad
        fila[0] = ciudad;
        
        // al array fila se le concatena el array valores, entonces ya tendra los huecos de los datos
        fila = fila.concat(valores);

       
        // es donde se guarda la tabla    
       if(this._medidas.push(fila)){
            return true;
       }
        
        else
            return false;
    }

    generaNAleatorios(n,min,max){
         // creamos el array valores
         var valores = new Array();
         // creamos la variable aleatorio
         var aleatorio;
         
         
         //recorremos el bucle durante 30 veces, que son los dias
         for(let i=0; i<n;i++){
             // generamos un numero aleatorio
             aleatorio = Math.round(Math.random() * ((max - (min)+ 1) + (min)));
             // se introducen los 30 valores aleatorios
             valores.push(aleatorio);        
         }
         return valores

    }

    insertaAleatorio(ciudad){
        
        //guardamos la fila con la ciudad y los valores
        this.insertaMedidas(ciudad,this.generaNAleatorios(30,-10,-40))
    }
        
    
    // Devuelve la temperatura media de la ciudad indicada durante el mes
    mediaMedidas(ciudad){
        var ciudad;
        var suma =0;
        var contador=0;
        var media = 0;
        
        // si lo encuentra, me devuelve el numero de la fila
        let fila = this.obtieneIdCiudad(ciudad);
                        //recorre con la posicion de la ciudad, el array medidas 
            for(let i=1; i<this._medidas[fila].length;i++){
                            // busca la columna y la fila
                    suma+= this._medidas[fila][i]
                    // contador nos dara los numeros por los que dividiremos
                    contador++;
                    
        }
        media=suma/contador;
        return media;
    }
i

    

    mediaMedidasTotal(){
        // tienes que recorrer todas las casillas
        var suma =0;
        var contador=0;
        var media = 0;
        
        
        //el bucle tiene que recorrer el array ciudad y luego otro, el array que contiene los valores
    
        for(let i=0; i< this._medidas.length; i++){
            for(let j=1; j< this._medidas[i]; j++){

                suma+= this._medidas [i][j]
                contador++;
            }
        }
        
        
                
            media=suma/contador;
            return media;
    }
       
    toHTML() { 
        // creamos una variable que acumule la primera etiqueta para crear una tabla
        var cadena = "<table>";
            //como cadena ya vale <table>, le sumamos las etiquetas de las filas y columnas
            cadena += "<tr><td></td>";
            //Muestra el encabezado de la tabla
        for(var i=1; i<this._medidas[0].length;i++){
            cadena += "<td>" + i + "</td>";
        }

        cadena+= "<tr>";


        // vamos recorriendo ciudad a ciudad 
    for(var i=0; i<this._medidas.length;i++){
            /*creamos el encabezado con las etiquetas th y la posicion del iterador.
              Se coge el nombre de la ciudad*/ 
        cadena += "<tr> <th>"+this._medidas[i][0]+"</th>";
                //recorremos las filas evitando el encabezado y las tenperaturas
            for(var j=1;j<this._medidas[i].length;j++){
                // le añadimos a cadena las filas
                cadena += "<td>"+this._medidas[i][j]+"</td>";
            }
            //cerramos la etiqueta tr
        cadena +="</tr>";
            
    }       //cerramos la etiqueta table
        cadena+="</table>";
    
        return cadena;
        }

    eliminaCiudad(ciudad){

    

    
    }
    toConsole(){

    }

    
    

















}


























