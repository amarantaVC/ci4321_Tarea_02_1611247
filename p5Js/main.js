/*
main.js
Este archivo contiene el código principal para crear un triángulo con colores por vértice en P5.js.

CI-4321 Computación Gráfica I
Autor: Amaranta Villegas
Carnet: 16-11247

*/


function setup() { // setup() se ejecuta una vez al inicio del programa
    createCanvas(1500, 715, WEBGL); //createCanvas crea un lienzo para dibujar en 2D o 3D. En este caso se crea un lienzo de 1500x715 pixeles 
    background('#1b1e2b'); // Color en formato hexadecimal para el fondo

  }
  
  function draw() { // draw() se ejecuta en un loop, por defecto 60 veces por segundo para actualizar la pantalla
    // Dibujar triángulo con colores en cada vértice
    beginShape(); // beingShape permite dibujar formas con un número variable de vértices
    
    // Vértice 1: Rojo
    fill(255, 0, 0); // #ff0000
    vertex(0, -87, 0); // vertex se usa para definir los vértices de la forma, es decir, las coordenadas de los puntos. En este caso se usa para definir el primer vértice del triángulo que esta en la parte superior 
  
  
    // Vértice 2: Verde
    fill(0, 255, 0); // #00ff00
    vertex(-50, 50, 0); // Ajustado para que esté en la esquina inferior izquierda
  
    // Vértice 3: Azul
    fill(0, 0, 255); // #0000ff
    vertex(50, 50, 0); // Ajustado para que esté en la esquina inferior derecha
  
    endShape(CLOSE); //endShape cierra la forma dibujada con beginShape
  }
  
  