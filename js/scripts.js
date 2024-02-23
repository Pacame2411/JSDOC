/**
 * Define la clase `Task` para representar una tarea individual.
 */
class Task {
    /**
     * Crea una nueva instancia de Task.
     * @param {string} text - El texto de la tarea.
     */
    constructor(text) {
        this.text = text; // Descripción de la tarea.
        this.completed = false; // Estado de completitud de la tarea, inicialmente falso.
    }
}

/**
 * Define la clase `TaskManager` para manejar operaciones relacionadas con las tareas,
 * como agregar, remover, y alternar el estado de completitud de las tareas.
 */
class TaskManager {
    constructor() {
        // Intenta cargar las tareas desde localStorage o inicializa un array vacío si no hay ninguna.
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    /**
     * Agrega una nueva tarea a la lista de tareas.
     * @param {string} text - El texto de la nueva tarea.
     */
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.updateLocalStorage(); // Actualiza localStorage con la nueva lista de tareas.
    }

    /**
     * Remueve una tarea de la lista por índice.
     * @param {number} index - El índice de la tarea a remover.
     */
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage(); // Actualiza localStorage después de remover la tarea.
    }

    /**
     * Alterna el estado de completitud de una tarea.
     * @param {number} index - El índice de la tarea a alterar.
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage(); // Actualiza localStorage con el nuevo estado de la tarea.
    }

    /**
     * Actualiza localStorage con la lista actual de tareas.
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Devuelve la lista actual de tareas.
     * @returns {Task[]} La lista de tareas.
     */
    getTasks() {
        return this.tasks;
    }
}

// Instancia de TaskManager para manejar las tareas en la UI.
const taskManager = new TaskManager();

/**
 * Añade una tarea utilizando el valor del input del usuario.
 * Limpia el input después de añadir la tarea.
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        taskManager.addTask(text);
        taskInput.value = '';
        renderTasks();
    }
}

/**
 * Elimina una tarea de la lista basada en su índice.
 * @param {number} index - El índice de la tarea a eliminar.
 */
function deleteTask(index) {
    taskManager.removeTask(index);
    renderTasks();
}

/**
 * Renderiza la lista de tareas en el DOM.
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpia la lista existente antes de renderizar de nuevo.
    taskManager.getTasks().forEach((task, index) => {
        const taskEl = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';
        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }

        // Botón para borrar tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Borrar';
        deleteBtn.onclick = () => deleteTask(index);
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('buttonB'); // Añadir clase buttonB

        taskEl.appendChild(taskText);
        taskEl.appendChild(deleteBtn);
        taskList.appendChild(taskEl);
    });
}

// Asegura que el DOM esté completamente cargado antes de añadir manejadores de eventos.
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addTaskBtn').addEventListener('click', addTask);
    renderTasks(); // Inicializa la lista de tareas.
});
