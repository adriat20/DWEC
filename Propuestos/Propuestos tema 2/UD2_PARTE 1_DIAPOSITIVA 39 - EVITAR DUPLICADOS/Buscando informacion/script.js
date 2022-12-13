let array = [100, 23, 23, 23, 23, 67, 45];

// Creamos un Set a partir del array original, lo que elimina los duplicados
let set = new Set(array);

// Convertimos el Set en un array de nuevo
let outputArray = Array.from(set);

console.log(outputArray); // imprime [100, 23, 67, 45]
