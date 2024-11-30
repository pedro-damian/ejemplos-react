<<<<<<< HEAD
import React, {useState} from 'react';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] =useState(true);

  const fetchPots = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    setPosts(data);
    setLoading(false);
  }

  useEffect(() =>{
    fetchPots();
  }, []);


  return (
    
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 422bb7a (ejemplo07)
  );
}

export default App;
