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
    return `[${this.prioridad}] ${this.titulo} ${estado}`;
  }
}

const listaTareasObjeto = [];

const formTarea = document.querySelector("#formTarea");
const tituloTarea = document.querySelector("#tituloTarea");
const prioridadTarea = document.querySelector("#prioridadTarea");
const mensajeError = document.querySelector("#mensajeError");
const filtroTarea = document.querySelector("#filtroTarea");
const listaTareas = document.querySelector("#listaTareas");

function renderizarTareas(filtro = "") {
  listaTareas.innerHTML = "";

  listaTareasObjeto
    .filter((t) => t.titulo.toLowerCase().includes(filtro.toLowerCase()))
    .forEach((tarea, index) => {
      const li = document.createElement("li");
      li.textContent = tarea.obtenerFormato();

      if (tarea.completada) {
        li.classList.add("completada");
      }

      const btnCompletar = document.createElement("button");
      btnCompletar.textContent = tarea.completada ? "Desmarcar" : "Completar";
      btnCompletar.addEventListener("click", () => {
        tarea.toggleCompletada();
        renderizarTareas(filtroTarea.value);
      });

      const btnBorrar = document.createElement("button");
      btnBorrar.textContent = "Eliminar";
      btnBorrar.classList.add("btn-borrar");
      btnBorrar.addEventListener("click", () => {
        listaTareasObjeto.splice(index, 1);
        renderizarTareas(filtroTarea.value);
      });

      li.appendChild(btnCompletar);
      li.appendChild(btnBorrar);
      listaTareas.appendChild(li);
    });
}

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (tituloTarea.value.trim() === "") {
    mensajeError.textContent = "El título de la tarea no puede estar vacío";
    return;
  }

  mensajeError.textContent = "";

  const nuevaTarea = new TareaItem(
    tituloTarea.value.trim(),
    prioridadTarea.value,
  );
  listaTareasObjeto.push(nuevaTarea);

  tituloTarea.value = "";
  renderizarTareas(filtroTarea.value);
});

filtroTarea.addEventListener("input", () => {
  renderizarTareas(filtroTarea.value);
});
