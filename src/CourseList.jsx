import Course from './Course';

import { useEffect, useState } from 'react';

function CourseList() {
    //useSet hook
    const [courses, setCourses] = useState(null);//coursedata
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {

            fetch('http://localhost:3000/courses')
                .then(response => {
                    console.log(response)
                    if (!response.ok) {
                        throw Error("Couldn't retrieve data.");
                    }
                    return response.json();
                }).then(data => setCourses(data))
                .catch((error) => {
                    console.log(error.message);
                    setError(error.message);
                })

        },1000)

    }, []); //We usually don't update state in useEffect because it run infinte,but here we did because it run only one time we have empty dependency array[] here. 

    function handleDelete(id) {
        const newCourses = courses.filter((course) => course.id != id)
        setCourses(newCourses);
    }
    /* SORTING AND FILTER
    
        courses.sort((x,y)=> x.price - y.price) //Ascending Order
    
        const vfmcourses = courses.filter((course)=>course.price<200);
    */

    if (!courses) {
        return (
            <>
                {!error && <img src="data/assets/loading.gif"></img>}
                {error && <p class="error">{error}</p>}
            </>
        )
    }
    const coursesList = courses.map((course) =>
        <Course
            key={course.id}
            name={course.name}
            price={course.price}
            image={course.image}
            rating={course.rating}
            ondelete={() => handleDelete(course.id)} />

    ); //Course Component Data as list [holds 4 course componet]
    return (
        <>
            {coursesList}
        </>
    );

}

export default CourseList