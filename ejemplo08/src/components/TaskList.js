import React, {useContext} from 'react';
import TaskContext from '../context/TaskContext';

const TaskList = () =>{
    const {tasks, dispatch} = useContext(TaskContext);

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}{' '}
                <button onClick={() => dispatch({type: 'REMOVE_TASK', payload: index})}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;