import React from "react";
import { useParams } from "react-router-dom";

const posts = {
    1: {title: "React router desde cero", content: "Creación de un React Router desde cero. Crea paso a paso y desde cero tu propia biblioteca de router para React. router;"},
    2: {title: "extraterrestres en el mar", content: "Desde hace varios días, en redes sociales ha circulado información sobre la supuesta existencia de vida alienígena en el mar. Y es que se dice que militares y el mismo gobierno de Estados Unidos han insinuado esta posibilidad;"},
    3: {title: "tendremos puerto espacial en el peru", content: "Las autoridades de Perú confirmaron este miércoles que se construirá, con apoyo de Estados Unidos, un puerto espacial en la costa norte del país, y anunciaron que este jueves suscribirán un memorando de entendimiento con la NASA para realizar una campaña de lanzamiento de cohetes sonda en 2028."}
}

const Post = () => {

    const {id} = useParams();
    const post = posts[id];
    if(!post){
        return <h2>Post no encontrado</h2>;
    }

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
       
    );
}

export default Post;
