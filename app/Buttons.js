import React from 'react';
function Buttons(){
  const handleClick=()=>{
    alert('this is add')
  }
  return (
    <button onClick={handleClick} >Add</button>
  )
}

export default Buttons;
