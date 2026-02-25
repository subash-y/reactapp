import { createContext, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Login from "./Login";

export const dataContext = createContext();

function Home() {

    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
            fetch('http://localhost:3000/posts', { signal })
                .then(response => {
                    if (!response.ok) {
                        throw Error("Couldn't retrieve data.");
                    }
                    return response.json();
                }).then(data => setPosts(data))
                .catch((error) => {
                    console.log(error.message);
                    setError(error.message);
                })
        //Cleanup Function 
        return () => {
            console.log("Unmounted,Cleaning up");
            controller.abort();
        };
    }, []);

    const data = "Datadata"

    return (
        <>
        {/**dataContext tag is created using create hook. */}
        <dataContext.Provider value={data}> 
            {/* <Login/> */}
        </dataContext.Provider>

        <div className="container">
                <Link className="btn btn-dark mt-4" to='/login'>Login</Link>
                <div className="row justify-content-center m-3">
                    {posts && posts.map(post => {
                        return (
                            <div key={post.id} className="card m-3" style={{ width: '18rem' }}  onClick={() => {navigate('/post/'+ post.id)}} >
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    {/* <p className="card-text">{post.content}</p> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    );
}

export default Home