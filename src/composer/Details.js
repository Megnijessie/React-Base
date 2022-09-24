import Navbar from "./Navbar";
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const {pk}=useParams();
    const [detail,setDetail]=useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+pk)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setDetail(data);
        })
    })
    return ( 
        <div className="details">
            <Navbar/>
            
            <h3>details sur l'article {detail.title}</h3>
            <div>
                {detail.body}
            </div>
        </div> 
    );
}
 
export default Details;