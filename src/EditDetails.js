
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const EditDetails = () => {
    const { id } = useParams();
    const {data:blog} = useFetch('http://localhost:8000/blogs/' + id);
    
    const [title, setTitle]= useState('');
    const [body, setBody]= useState('');
    const [author, setAuthor]= useState('');
    const history = useHistory();

    useEffect(() => {
        if (blog) {
          setTitle(blog.title);
          setBody(blog.body);
          setAuthor(blog.author);
        }
      }, [blog]);
    const handleEdit = () => {
        const blog = {title,body,author};
        fetch('http://localhost:8000/blogs/' + id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog),
        }).then(
            history.push('/')
        )
    }

    return (
        <div className="edit">
            <h2>Editing: <span className = "iTitle">{title}</span></h2>
            <form onSubmit={handleEdit}>
                <label >Title</label>
                <input type="text"
                    required
                    value={title}
                    onChange={function(e) {setTitle(e.target.value)}}
                />
                <label> Body </label>
                <textarea
                    value = {body}
                    onChange = {(e)=>setBody(e.target.value)}
                 id=""></textarea>
                 <label htmlFor="">Author</label>
                 <input type = "text"
                    required
                    value = {author}
                    onChange = {(e)=>setAuthor(e.target.value)} 
                />
                <button>Save changes</button>
                    
            </form>
        </div>


    );
}
export default EditDetails;
