import React, {createContext, useReducer} from 'react';

const TaskContext = createContext();

const TaskReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'REMOVE_TASK':
            return state.filter((task, index) => index !== action.payload);
        default:
            return state;
    }
}

export const TaskProvider = ({children}) =>{
    const [tasks, dispatch] = useReducer(TaskReducer, []);

    return (
        <TaskContext.Provider value={{tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskContext;