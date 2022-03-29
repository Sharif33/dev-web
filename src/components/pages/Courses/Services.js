import React, { useEffect, useState } from 'react';
import Course from './Course';

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`devweb.json`)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <div className="bg-light">
        <div className="container">
            <h3 className="text-center text-warning border-bottom border-info p-4 fw-bold">Web Development Courses</h3>
            <div className="row row-cols-1 row-cols-md-4 m-2 g-4">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    </div>
    );
};

export default Services;