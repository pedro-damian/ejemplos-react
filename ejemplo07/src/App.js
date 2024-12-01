import React, {useState, useEffect} from 'react';

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

  if(loading){
    return <p>Cargando Publicaciones</p>;
  }

  return (
    <div>
      <h1>Publicaciones</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}> 
          <strong>{post.title}</strong>
          <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
