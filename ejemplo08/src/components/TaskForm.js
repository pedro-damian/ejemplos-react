import React, {useContext, useState} from 'react';
import TaskContext from '../context/TaskContext';

const TaskForm = () =>{
    const {dispatch} = useContext(TaskContext);

    const [task, setTask] = useState('');

    const handleSubmit = (e) =>{ //Funcion para agregar la tarea
        e.preventDefault(); //Evitar que se recargue la pagina

        if(task.trim() === '') return; //Si el input esta vacio, no se agrega la tarea

        dispatch({type: 'ADD_TASK', payload: task}); //Agregar la tarea al estado
        setTask(''); //Limpiar el input
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} placeholder='Escribe una tarea' onChange={(e) => setTask(e.target.value)} style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px'}}/>
            <button type="submit" style={{padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer'}}>Agregar</button>
        </form>
    );
}

export default TaskForm;