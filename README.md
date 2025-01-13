# Proyecto: Gestión de Estudiantes con Spring Boot

## Descripción
Este proyecto implementa un sistema básico para gestionar información de estudiantes utilizando Spring Boot. Incluye modelos, controladores y rutas para realizar operaciones CRUD sobre los datos de los estudiantes.

## Estructura del Código

### Controlador `ApiEstudiante`

```java
@RestController
@RequestMapping("/api") 
public class ApiEstudiante {
    @Autowired
    private EstudianteRepository estudianteRepository;

    @GetMapping("/")
    public String index() {
        return "index"; // Devuelve la página index.html ubicada en resources/static
    }

    @GetMapping("/all")
    public List<Estudiante> getEstudiantes() {
        return estudianteRepository.findAll();
    }

    @GetMapping("/search/{cedula}")
    public Estudiante getEstudianteById(@PathVariable String cedula) {
        return estudianteRepository.findById(cedula).orElse(null);
    }
    
    @PostMapping("/save/{cedula}")
    public Estudiante addEstudiante(@PathVariable String cedula, @RequestBody Estudiante estudiante) {
        estudiante.setCedula(cedula);
        return estudianteRepository.saveAndFlush(estudiante);
    }

    @PutMapping("/edit/{cedula}")
    public Estudiante updateEstudiante(@PathVariable String cedula, @RequestBody Estudiante estudiante) {
        estudiante.setCedula(cedula);
        return estudianteRepository.saveAndFlush(estudiante);
    }

    @DeleteMapping("/delete/{cedula}")
    public void deleteEstudiante(@PathVariable String cedula) {
        estudianteRepository.deleteById(cedula);
    }

    @GetMapping("/saludar")
    public String saluda() {
        return "Hola mundo";
    }
}
```

## Rutas Disponibles

- **GET** `/api/`: Devuelve la página principal.
- **GET** `/api/all`: Obtiene la lista de todos los estudiantes.
- **GET** `/api/search/{cedula}`: Obtiene un estudiante por su cédula.
- **POST** `/api/save/{cedula}`: Agrega un nuevo estudiante.
- **PUT** `/api/edit/{cedula}`: Actualiza un estudiante existente.
- **DELETE** `/api/delete/{cedula}`: Elimina un estudiante por su cédula.
- **GET** `/api/saludar`: Retorna un saludo simple.

## Notas
Este proyecto utiliza JPA para la persistencia de datos y Spring Data JPA para simplificar las operaciones con la base de datos.
