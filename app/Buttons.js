import React from 'react';
function Buttons(){
  const handleClick=()=>{
    alert('this is add')
  }
  return (
    <div>
      <input ></input>
      <button onClick={handleClick} >Add</button>
      <button onClick={handleClick} >Delete</button>    
      <button onClick={handleClick} >Updata</button>
   
    </div>
    

  )
}

export default Buttons;
