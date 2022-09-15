import React,{useState} from 'react'
import Child from './Child';

function TaskFour() {

    const [name,setName] = useState("Hello My BigBrother");
    
    const buttonHandler=(data)=>{
         setName(data);
    }

  return (
    <>
    <div className='container-fluid d-flex  justify-content-center mt-5'>
        <h2 style={{color:"rgb(23, 36, 61)"}}>Update From Child Component</h2></div>
        <div className='d-flex  justify-content-center mt-5'>
        <h3>{name}</h3>
        </div>
        <div className='d-flex  justify-content-center'>
        <Child buttonHandler={buttonHandler} name={name}/>
        </div>
    </>
  )
}

export default TaskFour