import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function Post() {

    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Couldn't retrieve data.");
                }
                return response.json();
            })
            .then(data => setPost(data))
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    }, [id]); // run only when id changes



    return (
        <>
            <div>
                {
                    post && <div className="container m-5">
                        <p>Post:{id}</p>
                        <h2>{post.title}</h2>
                        <h4>{post.content}</h4>

                    </div>


                }
            </div>

        </>
    );
}


export default Post
