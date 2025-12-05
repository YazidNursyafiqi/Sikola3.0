import axios from "axios";
import { data } from "react-router-dom";

const uri = 'http://localhost:3000/Courses';


async function getCoursesRequest(){
    //const result = {error:false , data:{}};
    try{
        const response = await axios.get(uri);
        return {error:false , data:response.data};
    } catch(err){
        console.log('eror anjing');
        return {error:true , data:{}};
    }

    // axios.get(uri)
    //     .then((response)=>{
    //         result.data = response;
    //     })
    //     .catch(()=>{
    //         result.error = true;
    //         console.log('bermasalah');
    //     })
    //     .finally(()=>{
    //         console.log('respon selesai');
    //         return result;
    //     })
}

export default getCoursesRequest;