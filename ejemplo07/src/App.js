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
    
  );
}

export default App;
