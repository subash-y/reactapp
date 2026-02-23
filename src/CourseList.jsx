import Course from './Course';
import HTML from './assets/html.jpeg'
import CSS from './assets/CSS.jpg'
import JS from './assets/js.png'
import { useState } from 'react';

function CourseList() {
    //useSet hook
    const [courses,setCourses] = useState([
    { name: "HTML", price: 199, image: HTML, rating: 4.5, id: 1 },
    { name: "CSS", price: 150, image: CSS, rating: 4.0, id: 2 },
    { name: "Javascript", price: 299, image: JS, rating: 5, id: 3 },
    { name: "React", price: 100, rating: 3.0, id: 4 }
]);//coursedata

    function handleDelete(id){
        const newCourses = courses.filter((course) => course.id != id)
        setCourses(newCourses);
    }
/* SORTING AND FILTER

    courses.sort((x,y)=> x.price - y.price) //Ascending Order

    const vfmcourses = courses.filter((course)=>course.price<200);
*/
    const coursesList = courses.map((course) => 
        <Course 
        name={course.name} 
        price={course.price}
        image={course.image} 
        rating={course.rating} 
        ondelete = {()=>handleDelete(course.id)}/>
    
    ); //Course Component Data as list [holds 4 course componet]
    return(
        <>
        {coursesList}
        </>
    );

}

export default CourseList