import { useEffect, useState } from "react";


const UseFetch = (url) => {
    
    const [data, setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch(url)
        .then((response)=>{
            if (!response.ok) {
                throw Error('Desole une erreur est survenue...');
            }
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((err)=>{
            console.log(err);
            setError(err.message);
            setIsLoading(false);
        })
    }, [url]);

    return{data,isLoading,error};

}
 
export default UseFetch;