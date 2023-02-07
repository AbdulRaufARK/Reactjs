import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    
  
   


  const [count,setNames] = useState( []);
  const [ text,setText] = useState("");

  let add = () => {
    // setNames(current => [...current, 'abc']);     
    // console.log(count);
    count.push(text);
    // console.log(count)
    setNames([...count])
    
    }

    let edit = (index) =>{

      let value = count[index]

      let editedValue = prompt(value)

    count[index]= editedValue;
    setNames([...count])


     } 

     let deleteVal = (i) => {
      text.splice(i,0)
      setText([...text])
    }

    //  let newArray = count.filter((val,i)=> i !== index);


     return(
    <div>
      <div>
          
          <span>
          <input onChange={(e) =>{
            setText(e.target.value)
          }} type="text" placeholder='Enter value' />
          <span> <button onClick={add}>ADD</button> </span>
          </span>
      </div>
    {count.map((x,i) => {
      return(
        <div>
          
          <span><h3>{x}</h3>
          <span><button onClick={()=>edit(i)}>Edit</button>  </span>
          <span><button onClick={()=> deleteVal(i)}>Delete</button>  </span>
          </span> 
          
          
        </div>
        )})}
        
    </div>
  )
}


export default App;

