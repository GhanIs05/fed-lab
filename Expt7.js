import {useState} from 'react'; 
 
const App = () => { 
  const [isColored, setIsColored] = useState(false); 
 
  return ( 
    <div> 
      <p> 
         
        <span style={{color: isColored ? 'green' : ''}}>VVITGUNTUR.COM</span> 
 Nambur 
         
      </p> 
 
      <button onClick={() => setIsColored(isColored => !isColored)}> 
        Toggle isColored 
      </button> 
    </div> 
  ); 
}; 
export default App; 
