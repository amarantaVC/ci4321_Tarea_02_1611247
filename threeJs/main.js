/*
main.js
Este archivo contiene el código principal para crear un triángulo con colores por vértice en Three.js.

CI-4321 Computación Gráfica I
Autor: Amaranta Villegas
Carnet: 16-11247


*/

import * as THREE from 'three'; // Importar la librería de Three.js

// Crear la escena
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1b1e2b');  // Fondo oscuro (pero no negro)

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2; // la posicion de la camara en el eje Z a 2 unidades con el fin de poder visualizar mejor la escena

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear la geometría del triángulo
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    -0.5, -0.5, 0.0,  // Vértice 1
     0.5, -0.5, 0.0,  // Vértice 2
     0.0,  0.87, 0.0  // Vértice 3 (equilátero)
]);
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// Definir los colores para cada vértice
const colors = new Float32Array([
    0, 1, 0,  // Rojo para el vértice 1
    0, 0, 1,  // Verde para el vértice 2
    1, 0, 0   // Azul para el vértice 3
]);
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Crear el material que soporta colores por vértice
const material = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });

// Crear el mesh (triángulo)
const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Iniciar la animación
animate();
