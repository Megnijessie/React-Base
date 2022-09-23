import { useEffect } from "react";


function ArticleList() {

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>{
            return(response.data);
        })
    },[]);

    return(
        <div>
            <h1>Liste des articles</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Categorie</th>
                        <th scope="col">Votes</th>
                        <th scope="col">Plus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                            <button className="bg-primary px-3 py-2 rounded-3 border-0" > Details</button>
                            <button className="bg-success px-3 py-2 mx-3 rounded-3 border-0" > Modifier</button>
                            <button className="bg-danger px-3 py-2 rounded-3 border-0" > Supprimer</button>
                        </td>
                    </tr>
                </tbody>
                </table>
        </div>
    );
}

export default ArticleList;