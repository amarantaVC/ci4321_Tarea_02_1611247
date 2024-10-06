/*
triangle.cpp es el programa que permite dibujar el triangulo equilatero de colores rojo, verde y azul solicitado

CI-4321 Computación Gráfica I
Autor: Amaranta Villegas
Carnet: 16-11247

*/


#include <GL/glut.h> // Incluimos la librería GLUT que nos permite crear la ventana y dibujar el triángulo puesto que esta libreria contiene las funciones necesarias para dibujar figuras geometricas en 2D y 3D

// Función para dibujar el triángulo
void display() {
    glClear(GL_COLOR_BUFFER_BIT); // con glClear limpiamos el buffer de color 

    // Definir los vértices del triángulo
    glBegin(GL_TRIANGLES);
        glColor3f(0.0, 1.0, 0.0); // Rojo
        glVertex2f(-0.5, -0.5);

        glColor3f(0.0, 0.0, 1.0); // Verde
        glVertex2f(0.5, -0.5);

        glColor3f(1.0, 0.0, 0.0); // Azul
        glVertex2f(0.0, 0.87);
    glEnd();

    glFlush(); // usamos glFlush para que se dibuje el triángulo en la pantalla ya que al usar un single buffer no se dibuja automaticamente porque podria haber cambios en el buffer de color
}

// Función principal
int main(int argc, char** argv) {
    glutInit(&argc, argv); // Inicializar la librería GLUT donde se pasan los argumentos de la línea de comandos
    glutCreateWindow("Triangulo Equilatero usando OpenGL"); // Creamos la ventana
    glutInitWindowSize(500, 500); // Tamaño de la ventana
    glClearColor(0.106f, 0.118f, 0.169f, 1.0f); // Color background usando RGB  haciendo alusión al color 1b1e2b
    glutDisplayFunc(display); // Llamamos a la función display que nos permite dibujar el triángulo
    glutMainLoop(); // loop principal de GLUT
    return 0; //
}
