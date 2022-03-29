import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';

const CourseDetails = () => {
    // const { user} = useAuth();

    const { id } = useParams();

    const [course, setCourse] = useState([]);


    useEffect(() => {
      try {
        async function callApi() {
          let data = await fetch(`https://raw.githubusercontent.com/Sharif33/dev-web/main/public/devweb.json?fbclid=IwAR16iVuLPsOlJp8m9_i2VEy8o_VBLTOcPUMQBj33w6Yw1CAi3cyJfE2EclI/${id}`);
          data = await data.json();
          setCourse(data)
        }
      }
        catch (error) {
          console.log ('error',error)
        }
            
    }, [id]);

    // const coursesD = course.find(crs => crs.id == id)
    return (
        <div style={{marginBottom:"100px"}}> 
            <h1 className='text-dark'>{course?.id}</h1>
            <h1 className='text-dark'>{course?.id}</h1>
            <h1 className='text-dark'>{course?.id}</h1>
            <h1 className='text-dark'>{course?.id}</h1>
            <h1 className='text-dark'>{course?.id}</h1>
            <h1 className='text-dark'>{course?.id}</h1>
            <h1 className='text-dark'>{course?.id}</h1>
        </div>
    );
};

export default CourseDetails;