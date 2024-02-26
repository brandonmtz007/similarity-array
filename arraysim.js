const tabla = [
  ["Agua de sabor", 0, 0, 0, 10],
  ["Burritos", 3, 0, 7, 0],
  ["Café", 0, 0, 0, 10],
  ["Chilaquiles", 7, 0, 3, 0],
  ["Chocomilk", 0, 0, 0, 10],
  ["Crepas", 0, 8, 2, 0],
  ["Desayuno (Huevo, frijoles, cafe)", 10, 0, 0, 0],
  ["Enchiladas suizas", 0, 0, 10, 0],
  ["Enfrijoladas", 4, 0, 6, 0],
  ["Ensalada de pollo", 3, 0, 7, 0],
  ["Flautas de pollo", 1, 0, 9, 0],
  ["Fruta", 0, 10, 0, 0],
  ["Gelatina", 0, 10, 0, 0],
  ["Guiso del día", 0, 0, 10, 0],
  ["Hamburguesa con papas", 1, 0, 9, 0],
  ["Hamburguesa sencilla", 1, 0, 9, 0],
  ["Hot Dog", 2, 0, 8, 0],
  ["Jugo de naranja", 0, 0, 0, 10],
  ["Jugo verde", 0, 0, 0, 10],
  ["Liquado de frutas", 0, 0, 0, 10],
  ["Medio pachuco con carne", 9, 0, 1, 0],
  ["Medio Pachuco sencillo", 10, 0, 0, 0],
  ["Molletes con mantequilla", 4, 6, 0, 0],
  ["Orden de huevos", 10, 0, 0, 0],
  ["Orden hotcakes", 4, 6, 0, 0],
  ["Papas a la francesa", 3, 5, 2, 0],
  ["Sandwich de jamon", 10, 0, 0, 0],
  ["Sandwich de lomo", 10, 0, 0, 0],
  ["Sandwich de panela", 10, 0, 0, 0],
  ["Sandwich de pollo", 10, 0, 0, 0],
  ["Sincronizada", 8, 0, 2, 0],
  ["Sopitos", 1, 0, 9, 0],
  ["Tacos de adobada", 0, 0, 10, 0],
  ["Tacos tuxpeños", 9, 0, 1, 0],
  ["Té", 0, 0, 0, 10],
  ["Torta cubana", 8, 0, 2, 0],
  ["Torta de jamon", 10, 0, 0, 0],
  ["Torta de lomo", 9, 0, 1, 0],
  ["Torta de panela", 9, 0, 1, 0],
  ["Torta hawaiiana", 8, 0, 2, 0],
  ["Vaso con leche", 0, 0, 0, 10]
];

const matrizSimilaridad = [];

function calcularSimilaridad(item1, item2) {
  const filaItem1 = tabla.find(row => row[0] === item1);
  const filaItem2 = tabla.find(row => row[0] === item2);
  let suma = 0;
  let count = 0;
  
  for (let i = 1; i < filaItem1.length; i++) {
    suma += Math.min(filaItem1[i], filaItem2[i]);
    count += filaItem1[i];
  }
  
  const similaridad = (suma / count) * 100;
  return similaridad;
}

for (let i = 0; i < tabla.length; i++) {
  matrizSimilaridad[i] = [];
  for (let j = 0; j < tabla.length; j++) {
    const item1 = tabla[i][0];
    const item2 = tabla[j][0];
    const similaridad = calcularSimilaridad(item1, item2);
    matrizSimilaridad[i][j] = similaridad;
  }
}

console.log("Matriz de Similaridad:");
matrizSimilaridad.forEach(row => console.log(row.join(", ")));
