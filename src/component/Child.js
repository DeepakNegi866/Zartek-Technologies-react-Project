import React from 'react'

function Child(props) {

  const clickHandler=()=>{
     if(props.name==="Hello My BigBrother")
     {
       var data="How are you ?";
       props.buttonHandler(data);
     }
     if(props.name==="How are you ?")
     {
        data="Hello My BigBrother";
        props.buttonHandler(data);
     }
     
  }

  return (
    <>
   <button onClick={clickHandler}>Update</button>
    </>
  )
}

export default Child