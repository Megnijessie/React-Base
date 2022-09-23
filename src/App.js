import { useState } from 'react';
import './App.css';
import Navbar from './composer/Navbar';
import Formulaire from './composer/Formulaire';
import ArticleList from './composer/ArticleList';
 
function App() {

  const [nom,setNom]=useState('');
  const [desc, setDesc]=useState('');
  

  return (   
        <div>
            <Navbar/>
            <ArticleList/>
            {/* <Formulaire/> */}
        </div>  
  );
}

export default App;
