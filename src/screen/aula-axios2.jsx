import { useState, useEffect } from "react"; 
import axios from "axios";

function novoPost(){
    const [title, setTitle] = useState([]);
    const [body , setBody] = useState([]);

    const createPost = async (e)=> {
        e.preventDefault();
        const post = {title,body,userId:1};

        try {
            await axios.get('https://jsonplaceholder.typicode.com/posts', {body:post,});

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
           <h1>posts</h1> 
           <br/>
           <form onSubmit={(e)=>createPost(e)} >
            <label htmlFor="title"></label>
            <input type="text" name="title" id="title" placeholder="digite o titulo" onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="body"></label>
            <textarea name="body" id="body" placeholder="digite o conteudo" onChange={(e)   => setBody (e.target.value)}></textarea>
            <input type="submit" value="criar post"/>
           </form>
        </div>
    )
} export default novoPost;