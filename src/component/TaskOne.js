import React from 'react'
import {useState,useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


const TaskOne=()=> {

  const [item,setItem]=useState([]);
  const [start,setStart]=useState(2);
  const [hasMore,setHasMore]=useState(true);

  const getFetch=async()=>{
    const getData=await fetch(`https://jsonplaceholder.typicode.com/users?_start=1&_limit=10`);
    const res=await getData.json();
    setItem(res);
    console.log(JSON.stringify(res));
  }

  useEffect(()=>{
     getFetch();
  },[])

  const getMoreFetch=async()=>{
    const getMoreData=await fetch(`https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=10`);
    const result=await getMoreData.json();
    return result;
  }

  const fetchData=async()=>{
    const jsonData=await getMoreFetch();
    setItem([...item,...jsonData]);
    if(jsonData.length===0 || jsonData.length<10);
    {
      setHasMore(false);
    }
      setStart(start+1);
    }
       
  

  return (
    <>
    <InfiniteScroll
  dataLength={item.length} //This is important field to render the next data
  next={fetchData}
  hasMore={{hasMore}}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
<div className='container-fluid  main-div col-10'>
<h2 className='text'>Pagination</h2>
{
  item.map((current)=>{
   return(
    <>
    <div className="card col-10" style={{width: "20rem", height:"220px", margin:"10px"}}>
  <div className="card-body" key={current.id}>
    <h5 className="card-title">Card title</h5>
    <h5>Id:{current.id}</h5>
    <h5>Name:{current.name}</h5>
    <h5>Username:{current.username}</h5>
    <h5>Email:{current.email}</h5>
  </div>
  </div>
    </>
   )
  })
} 
</div>
</InfiniteScroll>
    </>
  )
}

export default TaskOne