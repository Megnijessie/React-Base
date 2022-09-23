import { useState } from 'react';

 
function Formulaire() {

  const [nom,setNom]=useState('');
  const [desc, setDesc]=useState('');
  

  return (   
        <div>
             <div className='post mx-5'>
                <h1 className='text-center' > Postez vos articles ici </h1>
                  <form className='mt-4'>
                      <p> Nom de l'article</p>
                      <input type="text" />
                      <p> Prix de l'article</p>
                      <input type="text" />
                      <p> Categorie de l'article</p>
                      <input type="text" />
                      <p> Description de l'article </p>
                      <textarea rows={10} cols={30} ></textarea>
                      <p> Image de l'article</p>
                      <input type='file' />
                      <br/>
                      <button type='submit' className='mt-5 bg-primary rounded-pill px-3 py-2 border-0'> enregistrer</button>
                  </form>
            </div> 
        </div>  
  );
}

export default Formulaire;
