import logo from './logo.svg';
import './App.css';
import './styles/ArrayBar.css'

import BubbleSort from "./sorting/BubbleSort.js"

import React, { useState } from 'react';


function App() {
  const [currentArray, updateArray] = useState([]);


  const GenerateArray = () => {
    const tempArray = [];
    for (let i = 0; i < 100; i++) {
      tempArray.push(Math.ceil(Math.random() * (100 - 1)));
    }
    updateArray(tempArray);
  }

  const handleBubble = () =>{
    BubbleSort(currentArray, updateArray);
  }

  return (
    <>


      <button onClick={GenerateArray}> generate array </button>
      <div className = "container">

        {currentArray.map(value => {
         
          return (<div className= "bar" style = {{height: (value * 2)}}> - </div>)
        })}
      </div>
        <button onClick={handleBubble}> bubble sort (optimized) </button>

    </>
  );
}

export default App;
