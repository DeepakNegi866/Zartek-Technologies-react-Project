import React,{useState} from 'react'


function TaskThree() {

    const [data,setData]=useState("");

    const GetData=(e)=>{
       setData(e.target.value);
    }

  return (
    <>
    <div className='d-flex justify-content-center mt-5'>
        <h3 style={{color:"red"}}>Input Here</h3>
        </div>
    <div className='d-flex justify-content-center mt-5'>
        <input type="text" onChange={GetData} style={{width:'300px', border:"2px solid black"}} />
    </div>
    <div>
        <h3 className='d-flex justify-content-center mt-5' style={{color:"green"}}>{data}</h3>
    </div>
    </>
  )
}

export default TaskThree