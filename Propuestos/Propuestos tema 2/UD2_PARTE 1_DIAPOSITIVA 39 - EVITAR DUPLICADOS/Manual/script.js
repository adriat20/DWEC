let array = [100, 23, 23, 23, 23, 67, 45];
let salida = [];

for (let i = 0; i < array.length; i++) {
  // Verificamos si el número ya está en el array de salida
  if (!salida.includes(array[i])) {
    salida.push(array[i]);
  }
}

console.log(salida); // imprime [100, 23, 67, 45]
