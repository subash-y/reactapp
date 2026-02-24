import { Link } from "react-router-dom";

function NotFound() {
    return (

        <>
            <div className='not-found'>
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <a className="btn btn-primary" href="/">Home</a> {/* this btn load from server*/} 
            </div>
            
            <Link className="btn btn-danger" to="/">Home</Link> {/*Loads from react browser router*/}
        </>
    );
}

export default NotFound