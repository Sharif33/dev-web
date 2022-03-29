import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';

const CourseDetails = () => {
    // const { user} = useAuth();

    const { id } = useParams();

    const [course, setCourse] = useState([]);


    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Sharif33/dev-web/main/public/devweb.json/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id]);

    // const coursesD = course.find(crs => crs.id == id)
    return (
        <div style={{marginBottom:"100px"}}> 
            <h1 className='text-dark'>{course?.courses}</h1>
        </div>
    );
};

export default CourseDetails;