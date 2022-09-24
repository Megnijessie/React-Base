import { useState } from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

 
function Formulaire() {
    let navigate = useNavigate();
  const [title,setTitle]=useState('');
  const [body, setBody]=useState('');
//   const history=useHistory();

  const handleBlogAdding = (e) => {
    e.preventDefault();
    const article={title,body};

    fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(article),
        })
        .then(()=>{
            console.log('Bravo');
            // history.push('/')
            navigate('/')
        })
        .catch((err)=>{
            console.log(err.message)
        })
  }

  return (   
        <div>
             <div className='post mx-5'>
                <h1 className='text-center' > Postez vos articles ici </h1>
                  <form className='mt-4' onSubmit={handleBlogAdding}>
                      <p> Titre de l'article</p>
                      <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}  />
                      <p> Description de l'article </p>
                      <textarea rows={10} cols={30} value={body} onChange={(e)=> setBody(e.target.value)} ></textarea>
                      <br/>
                      <button  type='submit' className='mt-5 bg-primary rounded-pill px-3 py-2 border-0'> enregistrer</button>
                  </form>
                 
            </div> 
        </div>  
        );
    }

export default Formulaire;
