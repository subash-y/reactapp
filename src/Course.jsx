import NOIMG from './assets/noimg.jpg'



function Course({ show, name = "Course Name Not Found", image = NOIMG, price, rating = 0 }) {

    function BuyCourse(discount,e) {
        console.log(name,"purchased with",discount,"% discount");
        console.log(e);
    }

    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Rating:{rating}</p>
            <button onClick={(event)=> BuyCourse(20,event)}>Buy now</button>
        </div>

    );

}


export default Course