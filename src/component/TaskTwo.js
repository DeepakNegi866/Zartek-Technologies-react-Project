import React from 'react'
import {useState} from 'react';

function TaskTwo() {
    const [toggle,setToggle]=useState("My Name Is Deepak Singh Negi.");

    const toggleHandler=()=>{
       if(toggle==="My Name Is Deepak Singh Negi")
       {
        setToggle("");
       }
       else{
        setToggle("My Name Is Deepak Singh Negi");
       }
       
    }

  return (
    <>
    <div className='container col-8 ml-5 mt-5' 
    style={
        {width:"100%",
         border:"1px solid black",
          backgroundColor:"yellow",
        fontWeight:"600px"}
          }>
        <div>
    <h1 onChange={(e) => setToggle(e.target.value)}>{ toggle }</h1>
    </div>
    <div>
            <button className="btn bg-primary"  onClick={toggleHandler}
            style={
                {color:"white",
                 fontWeight:"600px" }
                }>Toggle</button>
            </div>
    </div>
    </>
  )
}

export default TaskTwo