class Familia {
    constructor() {
      this.domicilio = "";
      this.renta = 0;
      this.miembros = [];
    }
  
    addMiembro(miembro) {
      this.miembros.push(miembro);
    }
  
    comer() {
        for (let i = 0; i < this.miembros.length; i++) {
            let miembro = this.miembros[i];
            console.log(miembro + "está comiendo");
          }
          
    }
  }
  
  const familia = new Familia();
  familia.addMiembro("Juan");
  familia.addMiembro("Ana");
  familia.comer();
  