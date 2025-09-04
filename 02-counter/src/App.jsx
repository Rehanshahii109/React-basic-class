// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
  
//  let [counter, setCounter] = useState(15)


//   // let Counter = 15

//   const addValue = ()=>{
   
//     // counter = counter + 1
//     setCounter(counter + 1 )
//     //  console.log("clicked", counter)
//   }

//   const removeValue = ()=>{
//     // console.log("clicked", counter)
//     // counter = counter - 1
//     setCounter(counter - 1 )
//   }

//   return (
//     <>
//       <h1>chai aur react</h1>
//       <h2>Counter value: {counter}</h2>

//       <button
//       onClick={addValue}
//       >Add value{addValue}</button>
//       <br />
//       <button
//       onClick={removeValue}
//       >remove value {counter}</button>
//       <p>footer: {counter}</p>
//     </>
//   )
// }

// export default App


// Assignments:


import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
