import NOIMG from './assets/noimg.jpg'

function Course({show, name = "Course Name Not Found", image = NOIMG, price,rating=0}) {
    if(show){
        return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>Rating:{rating}</p>
        </div>

    );
    }
    else{
        return(
            <div className="card">Course Not available</div>
        );
    }
}


export default Course