import React, { Component, useState} from 'react';
//import Buttons from './Buttons';

function App(){
  const [name, setName ] = useState([]);


  const handleClick = () => {
    fetch('http://localhost:3000/elements', {method: 'GET'}).then(
      function(res){
        console.log(res);
        res.json().then(function(data){
          console.log(data.listName);
          setName(data.listName);
        })
      }
    )
  }

  return (
    <div>
        <button onClick={handleClick}>Show</button>
        <br/>
        <ul>
        {name.forEach((i)=>{
        <li >{i}</li>
        }
        )}
        </ul>
    </div>
);

}



export default App;







