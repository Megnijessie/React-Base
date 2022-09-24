import { Link } from "react-router-dom";

function ArticleList({articles, handleDelete}) {

    return(
        <div>
            <h1>Liste des articles</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titre</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article)=>(
                        <tr key={article.id}>
                        <th scope="row">{article.id}</th>
                        <td>{article.title}</td>
                        <td>
                            <Link to={'/detail/'+article.id} className="bg-primary px-3 py-2 rounded-3 border-0" style={{ textDecoration:'none' }} > Details</Link>
                            <button className="bg-success px-3 py-2 mx-3 rounded-3 border-0" > Modifier</button>
                            {/* <button className="bg-danger px-3 py-2 rounded-3 border-0" onClick={()=>handleDelete(article.id)}> 
                                Supprimer
                            </button>                                 */}
                        </td>
                    </tr>
))}
                        
                
                </tbody>
                </table>
        </div>
    );
}

export default ArticleList;