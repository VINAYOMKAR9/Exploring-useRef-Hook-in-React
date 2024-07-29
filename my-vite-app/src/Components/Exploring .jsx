import React, { useEffect, useRef, useState } from 'react'

const Exploring  = () => {

const inputRef = useRef(null);
const [update,setUpdate]= useState(false)
const inputRefi = useRef(null);

var refCond=false
var oks = 0
  

useEffect(() => {
  inputRef.current.focus();    
}, []);



const handleDivClick = () => {
};


const handleInputChange = () => {
  
  let abc = inputRef.current.value
  console.log(abc)
};

const handleSub=()=>{
  setUpdate(el=>!el)
  if(refCond==true){
      inputRef.current.style.backgroundColor = 'yellow';
      // inputRefi.current.value='false'
      refCond=false
      oks++
    }
    else{
      refCond = true
      // inputRefi.current.value='true'
      inputRef.current.style.backgroundColor = 'green';
      oks++
    }
    
  }
 
//   const ref= useRef('avd')
//   let refCond= useRef(false)

//   useEffect(()=>{
//  ref.current.focus()
//   },[])
//   console.log('main',ref.current)

  

//   const handleSub =()=>{
   
//     let varr= ref.current.value
//     if(refCond==true){
//       refCond=false
//     }
//     else{
//       refCond = true
//     }
//     console.log(refCond)
//     console.log(varr)
//   }

  return (
    <div>
<h2>Focusable Input Field</h2>
<input ref={inputRef} type="text" placeholder="Focus on mount"  onChange={handleInputChange}/>

    <button onClick={handleSub}>submit</button>
<p>Current Value: {inputRef.current?.value}</p>

      
    </div>
  ) 
}

export default Exploring 
