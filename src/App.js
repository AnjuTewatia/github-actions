import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {

  const [counter,setCounter] = useState(0)

  const handleClick=() =>{
    setCounter(counter+ 8)
  }
  const handleClick2 =() =>{
    setCounter(counter-8)
  }

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      fontSize:"300%",
      position:"absolute",
      width:"100%",
      height:"100%",
      top:"-15%",
    }}> Counter App:{counter}
<div>
      <button style={{
        fontSize:"60%",
        position:"relative",
        top:"20vh",
        marginRight:"5px",
        backgroundColor:"green",
        borderRadius:"8%",
        color:"white",
      }}  onClick={handleClick}>  
      Increment
      </button>
      <button  style ={{
        fontSize:"60%",
        position:"relative",
        top:"20vh",
        marginRight:"5px",
        backgroundColor:"red",
        borderRadius:"8%",
        color:"white",

      }} onClick={handleClick2}>
        Decrement
      </button>
    </div>
    </div>
  );
}

export default App;
