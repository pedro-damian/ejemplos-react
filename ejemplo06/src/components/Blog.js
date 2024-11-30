import React from "react";
import { Link } from "react-router-dom"; 

const posts = [
    { id : 1, title : 'React Router desde Cero' },
    { id : 2, title : 'Extraterrestres en el mar'},
    { id : 3, title : 'Tendremos puerto espacial en Perú'}
];


const Blog = () => {
    return(
        <div>
            <h1>Blog</h1>
            <p>Selecciona una publicación para leer: </p>
            <ul>
                { posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`} > {post.title} </Link>
                    </li>
                ) )}
            </ul>
        </div>
    );
}

export default Blog;