import { useHistory, useParams } from "react-router-dom";
import delIcon from "./images/delete-icon.png";
import editIcon from "./images/edit-icon.png";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/' + id,{
            method:'DELETE'
        }).then(
            history.push('/')
        )
    }
    const handleEdit = () =>{
        history.push('/edit/' + id);
    }

    return (
        <div className="blog-details">
            { isPending && <div> Loading...</div>}
            { error && <div> {error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div className="icons">
                        <img src = {editIcon} onClick = {handleEdit}  alt="Edit" />
                        <img src = {delIcon} onClick = {handleDelete}  alt="Delete" />
                    </div>
                    <p>Written by <span className = 'author'>{blog.author}</span> </p>
                    <p>{blog.body}</p>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;