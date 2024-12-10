import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {TaskProvider} from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div>
        <h1>Lista de Tareas</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
