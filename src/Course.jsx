import { useState } from 'react';
import NOIMG from './assets/noimg.jpg'



function Course({ show, name = "Course Name Not Found", image = NOIMG, price, rating = 0 }) {

    const [purchased,setPurchased] = useState(false);
    function BuyCourse(discount,e) {
        console.log(name,"purchased with",discount,"% discount");
        setPurchased(true);
        console.log(purchased);
    }

    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Rating:{rating}</p>
            <button onClick={(event)=> BuyCourse(20,event)}>Buy now</button>
            <p>{purchased?"Already purchased":"Get it now"}</p>
        </div>

    );

}


export default Course