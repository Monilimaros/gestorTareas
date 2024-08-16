//lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //almacenamiento Local en nuestro navegador/

//función para llevar las tareas
export const getTasks = () => tasks;

//función para agregar una tarea
export const addTask = (task) => {
    const newtask = {
        id: Date.now(),
        text: task,
        completed:false,
    };
    tasks.push(newtask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Función para eliminar una tarea
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt (id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Función para actualizar una tarea
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};