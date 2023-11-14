import { useState, useEffect } from "react"; 
import axios from "axios";

function Posts(){
    const [posts, setPosts] = useState([]);
    
    const data = async ()=> {
        try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const dados = response.data;
        setPosts(dados);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect (() => {
        data();
    }, []);
    return(
        <div>
           <h1>posts</h1> 
           <br/>
           <ul>
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                    )}
            </ul>    
        </div>
    )
} export default Posts;