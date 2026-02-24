import Course from './Course';

import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function CourseList() {

    const [courses, setCourses] = useState(null);   // local state for courses
    const [data, error] = useFetch('http://localhost:3000/courses');

    // When data is fetched, update local state
    useEffect(() => {
        if (data) {
            setCourses(data);
        }
    }, [data]);

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
                {!error && <img className='image' src="data/assets/loading.gif"></img>}
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