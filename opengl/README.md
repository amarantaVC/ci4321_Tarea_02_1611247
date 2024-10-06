# CI4321 - SEP-DIC 2024

# Tarea 02 - Triángulo equilátero con colores rojo, verde y azul usando OpenGL

## Autor

- **Nombre**: Amaranta Villegas 
- **Carnet**: 16-11247
- **API utilizada**: OpenGL con GLUT

## Sistema Operativo de Desarrollo

Esta tarea se realizó en el SO **Windows 11** utilizando **WSL (Windows Subsystem for Linux).**

## Dependencias utilizadas 

Antes de poder compilar y ejecutar el código, asegurese de tener las siguientes dependencias instaladas:

1. **Servidor X (X Server)**: Necesitará un servidor X en su máquina Windows para la salida gráfica. Puede usar:
    - [Xming](https://sourceforge.net/projects/xming/)

2. **WSL (Windows Subsystem for Linux)**: Esta tarea corre sobre WSL. Por favor, Asegurese de tenerlo instalado y configurado.

3. **Bibliotecas de OpenGL y GLUT**: Instale las bibliotecas necesarias en WSL ejecutando los siguientes comandos:
    ```
    sudo apt update
    ```
    ```
    sudo apt install freeglut3-dev mesa-utils
    ```

## Instrucciones para correr el proyecto

Sigua estos pasos para ejecutar el programa:

### 1. Configurar el servidor X en Windows

[Xming](https://sourceforge.net/projects/xming/).
- Inicie el servidor X con la opción **"Disable access control"** para permitir conexiones desde WSL.

### 2. Configurar WSL

En su terminal de **WSL**, exporte la variable de entorno `DISPLAY` para que WSL sepa dónde mostrar la salida gráfica. Ejecute este comando:

```export DISPLAY=:0 ```

### 3. Compilar el programa

```g++ triangle.cpp -o triangle -lGL -lGLU -lglut```

### 4. Ejecutar el programa

``` ./triangle```

## Errores comunes y como solucionarlos

- No protocol specified / Error: unable to open display:

    Asegurese de haber exportado correctamente la variable **DISPLAY** con ```export DISPLAY=:0```

- Verifique que el servidor X este corriendo en Windows.
    Si el problema persiste, intente ejecutar ```xhost +``` en WSL para permitir todas las conexiones al servidor X.
- glxinfo / glxgears no funciona:

    Asegurese de tener instaladas las bibliotecas de OpenGL con:
    ```sudo apt install mesa-utils```