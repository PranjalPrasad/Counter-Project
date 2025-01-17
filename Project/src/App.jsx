import { useState } from 'react'

import './App.css'

function App() {

  // let counter=15;
// state 
  const [counter,setCounter]=useState(1)

  const addValue=()=>{
  //  counter= counter+1
  //   console.log(counter);
  setCounter(counter+1)



  // setCounter(counter+1)
  // setCounter(counter+1)
  // if I repeat  setCounter() here then it 
  // runs as a normal because bundles everything together and batching is done
  // to remove batching we use callback
  // setCounter((prevCounter)=>prevCounter+1)
  // setCounter((prevCounter)=>prevCounter+1)
  // setCounter((prevCounter)=>prevCounter+1)
  // setCounter((prevCounter)=>prevCounter+1)
  // this can not be batched
  }


  const removeValue=()=>{
  // newcounter=counter-1;
    setCounter(counter-1)
      
    }

  return (
    <>
      <h1> Counter Project</h1>
      <h2>Counter value:{counter} </h2>
      <button 
       onClick={addValue}
      >Add Value
      </button>

      <button
      onClick={removeValue}
      >Remove Value</button>
      {/* <p>Footer: {counter} </p> */}
    </>
  )
}

export default App
