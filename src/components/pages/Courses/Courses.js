import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Sharif33/dev-web/main/public/devweb.json?fbclid=IwAR16iVuLPsOlJp8m9_i2VEy8o_VBLTOcPUMQBj33w6Yw1CAi3cyJfE2EclI")
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <div className="bg-light">
        <div className="container">
            <h3 className="text-center text-warning border-bottom border-info p-4 fw-bold">Top Web Development Courses</h3>
            <div className="row row-cols-1 row-cols-md-4 m-2 g-4">
                {
                    courses.slice(0, 4).map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
            <div className="text-center p-4">
                <Link to="/services"><button className="btn btn-outline-primary p-2 px-4 rounded-pill">
                    View all <i className="fas fa-arrow-right"></i>
                </button></Link>
                
            </div>
        </div>
    </div>
    );
};

export default Courses;