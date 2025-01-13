# Proyecto: Gestión de Estudiantes con Spring Boot

## Descripción
Este proyecto implementa un sistema básico para gestionar información de estudiantes utilizando Spring Boot. Incluye modelos, controladores y rutas para realizar operaciones CRUD sobre los datos de los estudiantes.

## Endpoints Disponibles

| Método | Endpoint              | Descripción                                   |
|--------|-----------------------|-----------------------------------------------|
| GET    | `/api/`              | Muestra el índice (index.html).              |
| GET    | `/api/all`           | Obtiene todos los estudiantes.               |
| GET    | `/api/search/{cedula}` | Busca un estudiante por su cédula.           |
| POST   | `/api/save/{cedula}`  | Crea un nuevo estudiante.                    |
| PUT    | `/api/edit/{cedula}`  | Actualiza los datos de un estudiante.        |
| DELETE | `/api/delete/{cedula}`| Elimina un estudiante por su cédula.         |
| GET    | `/api/saludar`       | Devuelve "Hola mundo" como saludo.           |

## Cómo Iniciar y Ejecutar el Proyecto

### Prerrequisitos

- Java JDK 11 o superior.
- Apache Maven.
- Un IDE como IntelliJ IDEA, Eclipse o VS Code.
- Base de datos configurada (opcional, si utiliza una).

### Pasos para Iniciar el Proyecto

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Construir el proyecto:
   ```bash
   mvn clean install
   ```

3. Ejecutar la aplicación:
   ```bash
   mvn spring-boot:run
   ```

4. Acceder a la aplicación:
   Abra su navegador y diríjase a `http://localhost:8080/api` para interactuar con la API.

### Pruebas de Endpoints

Puede usar herramientas como Postman, cURL o su navegador para probar los endpoints disponibles. Por ejemplo:
- Obtener todos los estudiantes:
  ```bash
  curl -X GET http://localhost:8080/api/all
  ```
