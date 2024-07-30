import React, { useEffect, useRef } from 'react'

const InputRef = () => {
    const ref =useRef("");
    const display = useRef(null);



useEffect(()=>{
    const handleinput =()=>{
        if(display.current){
            display.current.textContent = ref.current.value;
        }
        // console.log("Input value", ref.current.value);
    }

const inputElem = ref.current;

inputElem.addEventListener('input', handleinput);

return()=>{
    inputElem.addEventListener('input', handleinput);
}
}, [])


const handleClick=()=>{
    console.log(display);
}
console.log("rendering....");


  return (
    <div>
      <input type="text" ref={ref} placeholder='Enter something...'/>
      <button onClick={handleClick}>Submit</button>

      <div>
        <p>Input value: <span ref={display}></span></p>
      </div>
    </div>
  )
}

export default InputRef
