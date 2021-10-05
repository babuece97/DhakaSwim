import React, { useEffect,useState} from 'react';
import  './Body.css';


const Body = () => {

    const[courses,setCourses]=useState([]);
    useEffect(()=> {
        fetch('fakeData.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    }, [])

    console.log(courses);
    return (
        <div className="body-container">
            <h1> HOT OFFER TILL NOVEMBER</h1>
            <div className="body">
                <div className="row">
                   {courses.map((course)=>(
                        <div className="col-md-3"> 
                         <div className="card"> 
                            < div className="card-image">
                              <img className="w-100" src={course.img} alt="" />
                            </div>
                            <h1> {course.name}</h1>
                            <h5> Suitable:{course.Description}</h5>
                            <h5> Monthly payment ONLY (BDTK):{course.price}</h5>
                         </div>
                        </div>))
                    } 
                </div>
            </div>
        </div>
    );
};

export default Body;