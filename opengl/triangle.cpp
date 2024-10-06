#include <GL/glut.h>

// Función para dibujar el triángulo
void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // Definir los vértices del triángulo
    glBegin(GL_TRIANGLES);
        glColor3f(0.0, 1.0, 0.0); // Rojo
        glVertex2f(-0.5, -0.5);

        glColor3f(0.0, 0.0, 1.0); // Verde
        glVertex2f(0.5, -0.5);

        glColor3f(1.0, 0.0, 0.0); // Azul
        glVertex2f(0.0, 0.87);
    glEnd();

    glFlush();
}

// Función principal
int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("OpenGL Triángulo Simple");
    glutInitWindowSize(500, 500);
    glClearColor(0.106f, 0.118f, 0.169f, 1.0f); // Color background
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}
