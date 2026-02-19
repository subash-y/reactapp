import Course from './Course';
import HTML from './assets/html.jpeg'
import CSS from './assets/CSS.jpg'
import JS from './assets/js.png'

function CourseList() {

    const courses = [
        {
            name: "HTML",
            price: 199,
            image: HTML,
            rating: 4.5
        },

        {
            name: "CSS",
            price: 150,
            image: CSS,
            rating: 4.0
        },
        {
            name: "Javascript",
            price: 299,
            image: JS,
            rating: 5
        },
        {
            name: "React",
            price: 100,
            rating: 3.0
        }
    ] //Course Data
/* SORTING AND FILTER

    courses.sort((x,y)=> x.price - y.price) //Ascending Order

    const vfmcourses = courses.filter((course)=>course.price<200);
*/
    const coursesList = courses.map((course,index) => 
        <Course
        key={index+1} 
        name={course.name} 
        price={course.price}
        image={course.image} 
        rating={course.rating} />
    
    ); //Course Component Data as list [holds 4 course componet]
    return(
        <>
        {coursesList}
        </>
    );

}

export default CourseList