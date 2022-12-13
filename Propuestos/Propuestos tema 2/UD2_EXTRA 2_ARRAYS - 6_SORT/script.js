function comparaApellido(a, b) {
    var aApellido = a.split(' ')[1];
    var bApellido = b.split(' ')[1];
    if (aApellido < bApellido) {
      return -1;
    }
    if (aApellido > bApellido) {
      return 1;
    }
    return 0;
  }
  
  var people = ['Adrian Alonso', 'Juan y medio', 'Jordi Hurtado'];
  people.sort(comparaApellido);
  