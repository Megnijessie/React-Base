import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";

function Home(){

    const [articles, setArticles]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            if (!response.ok) {
                throw Error('Desole une erreur est survenue...');
            }
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            setArticles(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((err)=>{
            console.log(err);
            setError(err.message);
            setIsLoading(false);
        })
    }, []);

    const handleDelete= (id)=>{
        const newList= articles.filter((article)=>article.id !== id);
        setArticles(newList);
    }

    return ( 
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div>En cours de chargement.... </div>}
            <ArticleList articles={articles} handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;