# Tarea: Mi componente interactivo

## Componente elegido

Hice un gestor de tareas sencillo. Permite agregar pendientes con su prioridad (Alta, Media, Baja), buscarlos rápido en un buscador, marcarlos si ya se hicieron o borrarlos de la lista.

## Version 1: solo DOM

En esta primera versión armé la estructura básica e inserté una tarea directamente desde JS usando `createElement` y `appendChild`.

```js
// Version 1: Solo manipulacion del DOM
const lista = document.querySelector("#listaTareas");
const primeraTarea = document.createElement("li");
primeraTarea.textContent = "[Alta] Estudiar para el examen de JavaScript";
lista.appendChild(primeraTarea);
```

- Que agregue: Seleccionar la lista en el DOM y meter un elemento `<li>` a mano con JS.
- Por que: Para probar cómo agregar texto en la pantalla sin tener que escribirlo fijo en el HTML.
- Que cambio: Al abrir la página ya aparece la primera tarea insertada desde el código.

## Version 2: con eventos

Le agregué interacción para que el usuario pueda escribir sus tareas, buscarlas y borrar o completar lo que necesite.

```js
// Version 2: Captura de eventos y validacion
const form = document.querySelector("#formTarea");
const input = document.querySelector("#tituloTarea");
const error = document.querySelector("#mensajeError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    error.textContent = "El título de la tarea no puede estar vacío";
  } else {
    error.textContent = "";
  }
});
```

- Que agregue: Eventos `submit` (formulario), `input` (buscador) y `click` (botones de borrar y completar), más la validación del texto.
- Por que: Para que la página responda a lo que hace el usuario y no deje agregar tareas vacías.
- Que cambio: Ahora se pueden guardar o filtrar tareas en vivo sin que la página se ande recargando.

## Version 3: con clases y objetos

Ordené todo el código usando una clase `TareaItem` para manejar los datos y estados de cada tarea de forma más limpia.

```js
// Version 3: Uso de clases orientadas a objetos
class TareaItem {
  constructor(titulo, prioridad) {
    this.titulo = titulo;
    this.prioridad = prioridad;
    this.completada = false;
  }

  toggleCompletada() {
    this.completada = !this.completada;
  }

  obtenerFormato() {
    const estado = this.completada ? "[Completada]" : "[Pendiente]";
    return `[${this.prioridad}] ${this.titulo}${estado}`;
  }
}
```

- Que agregue: La clase `TareaItem` con atributos (`titulo`, `prioridad`, `completada`) y dos métodos simples.
- Por que: Para no tener variables sueltas por todos lados y tener bien organizada la información de cada tarea.
- Que cambio: Cada tarea agregada ahora es un objeto propio con sus datos y botones funcionando al 100%.

## Donde uso DOM, eventos y objetos

| Pieza  | Linea de tu codigo donde aparece                     | Para que sirve                                                                    |
| ------ | ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| DOM    | `createElement("li")`, `appendChild`                 | Para crear los elementos en la página y mostrarlos en la lista.                   |
| Evento | `addEventListener("submit")` / `"input"` / `"click"` | Para reaccionar cuando el usuario envía el formulario, busca o presiona un botón. |
| Objeto | `new TareaItem(...)`, `tarea.toggleCompletada()`     | Para crear cada tarea como objeto y cambiar su estado de pendiente a completada.  |

## Pruebas realizadas

| Accion                          | Resultado esperado                                          | Resultado obtenido                                | cumple (Si/No) |
| ------------------------------- | ----------------------------------------------------------- | ------------------------------------------------- | -------------- |
| Enviar con el campo vacío       | Mostrar aviso: "El título de la tarea no puede estar vacío" | Salió el texto de aviso en rojo                   | Sí             |
| Agregar "Comprar leche" (Alta)  | Crearse la tarea "[Alta] Comprar leche [Pendiente]"         | Apareció correctamente en la lista                | Sí             |
| Dar clic en "Completar"         | Cambiar estado a "[Completada]" y tachar el texto           | Se tachó la tarea y el botón cambió a "Desmarcar" | Sí             |
| Buscar "Comprar" en el buscador | Mostrar solo las tareas que tengan esa palabra              | Se filtró la lista al instante                    | Sí             |
| Dar clic en "Eliminar"          | Borrar la tarea de la lista                                 | Se borró la tarea de la pantalla                  | Sí             |

## Por que diseñe asi mi clase

Creé la clase `TareaItem` con `titulo`, `prioridad` y `completada` porque es lo básico que necesita una tarea para funcionar. Usé el método `toggleCompletada()` para cambiar fácil de pendiente a completado, y `obtenerFormato()` para juntar todo el texto que se muestra en pantalla sin llenar el código de enredos.
