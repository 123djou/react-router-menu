import React from 'react';


export  const Home =()=>{
    return <h1>home page</h1>
  } 
  

  export const Entrepreneur=()=>{

    return <h1> entrepreneur page </h1>
  }
  export const Student=()=>{

    return <h1> student page </h1>
  }
  export const Hobbi=()=>{

    return <h1> hobbists page </h1>
  }
  export const Contact=(props)=>{
console.log(props)    
return <h1> {props.id}   page </h1>
    
  }