import styles from './courses.module.css';
import { useState , useEffect } from 'react';
import getCoursesRequest from '../../hooks/get_courses_available/get_courses.js';
import Course_card_item from './courses_card_item.jsx';


function ParseDataCourse({data}){
    console.log(data.data);
    if(data.error){
        return(
            <>error serveer not found</>
        );
    }
    return(
        <>{(data.data).map((value,index)=>(
            <Course_card_item course={value}/>
        ))}
        </>
    );
}

function Courses(){
    const [loading , setloading] = useState(true);
    const [requestData,setRequestData]= useState({});


    useEffect(()=>{
        const loadData = async ()=>{
            const data = await getCoursesRequest();
            setloading(false);   
            setRequestData(data);
            //console.log(requestData);
        };

        loadData();
    },[])

    return(
        <>
            <h2>My Courses</h2>
            <h4>Course overview</h4>
            <div id={styles.courses_list_container}>
                {(loading)?(<>loading</>):(<ParseDataCourse data={requestData}/>)}
            </div>
        </>
    );
}

export default Courses;