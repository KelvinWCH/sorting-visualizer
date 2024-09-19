import logo from './logo.svg';
import './App.css';
import './styles/ArrayBar.css'
import './styles/Main.css'

import BubbleSort from "./sorting/BubbleSort.js"
import InsetionSort from "./sorting/InsertionSort.js"
import MergeSort from "./sorting/MergeSort.js"

import React, { useState } from 'react';


function App() {
  const [currentArray, updateArray] = useState([]);
  const [amountElements, updateAmountElement] = useState(100);

  const GenerateArray = () => {
    const tempArray = [];
    for (let i = 0; i < amountElements; i++) {
      tempArray.push(Math.ceil(Math.random() * (100 - 1)));
    }
    updateArray(tempArray);
  }

  const handleBubble = () => {
    BubbleSort(currentArray, updateArray);
  }

  const handleUpdateAmount = (e) =>{
    updateAmountElement(e.target.value)
  }

  const handleInsertion = () =>{
    InsetionSort(currentArray, updateArray);
  }

  const handleMerge = () => {
    MergeSort(currentArray, updateArray);
  }

  return (
    <>

      
      <button onClick={GenerateArray}> generate array </button>
      <input type = "text" value = {amountElements} onChange={handleUpdateAmount}/>Amoun


      <div className="container">
        {currentArray.map(value => {

          return (
            <div className="bar" style={{ height: (value * 2), fontSize: "1px"}}>
              .
            </div>
          )
        })}
      </div>
      <label> estimated time: {(currentArray.length **2) / 1000}s </label>
      <button onClick={handleBubble} className = "sort-button"> bubble sort (optimized) </button>
      <button onClick={handleInsertion} className = "sort-button"> insertion sort </button>
      <button onClick={handleMerge} className = "sort-button"> merge sort </button>
    </>
  );
}

export default App;
