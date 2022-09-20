import React from 'react'
import {useState,useEffect} from 'react';
import { Pagination } from '@mui/material';


const TaskOne=()=> {

  const [item,setItem]=useState([]);
  const [page,setPage]=useState(0);
 

  const getFetch=async()=>{
    const getData=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=12`);
    const res=await getData.json();
    setItem(res);
  }

  useEffect(()=>{
     getFetch();
  },[page])

  return (
    <>
    <div className="bg-primary text-dark bg-opacity-10">
    <div className='container-fluid row d-flex justify-content-center bg-primary text-dark bg-opacity-25'>
      <h3 className='text text-center mt-3' style={{color:"darkgreen"}}>Pagination</h3>
{
  item.map((current)=>{
   return(
    <>
    <div className="card col-10" style={{width: "22rem", height:"500px", margin:"10px"}}>
  <div className="card-body" key={current.id}>
    <h5 className="card-title text text-center" style={{color:"darkgreen"}}>Card</h5>
    <h5><h5 style={{color:"darkgreen", fontweight:"500"}}>Id:</h5>{current.id}</h5>
    <h5><h5 style={{color:"darkgreen", fontweight:"500"}}>Title:</h5>{current.title}</h5>
    <h5><h5 style={{color:"darkgreen", fontweight:"500"}}>Body:</h5>{current.body}</h5>
  </div>
  </div>
    </>
   )
  })
} 
</div>
<div className='d-flex justify-content-center mb-5 mt-5'>
<Pagination
  count={9}
  variant="outlined"
  color="primary"
  showFirstButton
  showLastButton
  onChange={(e,value)=>setPage(value)}/>
</div>
</div>
</>
  )
}

export default TaskOne
