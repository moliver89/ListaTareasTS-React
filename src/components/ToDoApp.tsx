import { useState } from 'react';
import ListaTareas from './ListaTareas';

const ToDoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>('');
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTask = () => {
    // Si esta vacio no lo guarda y sale de la funcion.
    if (nuevaTarea.trim() === '') return;
    // Agrega la nueva tarea al final.
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
    // Deja el input vacio para no repetir la tarea con muchos clicks.
    setNuevaTarea('');
  };

  const handleBorrarTarea = (index: number) => {
    setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type='text'
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder='Nueva Tarea'
        />
        <button onClick={handleAddTask}>Enviar</button>
      </div>
      <ListaTareas
        listaTareas={listaTareas}
        borrarTarea={handleBorrarTarea}
      ></ListaTareas>
    </div>
  );
};

export default ToDoApp;
