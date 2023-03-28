
import './App.css';

// import { Planets } from './planets.js'

import { useState } from 'react';

// function App() {
  //home work #1
//   return (
//     <div className="App">
//       {Planets.map((planetsArray,index)=>{
//         return( <ul>{planetsArray.isGasPlanet ? planetsArray.name:null}</ul>
//       )})}
//     </div> 
//   );
// }
// return (
//   <div className="App">
//     {Planets.map((value)=>{
//       return (<h1>{value.isGasPlanet ? value.name : null}</h1>)
//     })}
//   </div> )
// }

//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age+1);
//   };

// return (
//   <div className="App">
//     {age}
//     <button onClick={increaseAge}> Increase age </button>
//   </div> )
// }

// const [age,setAge] = useState(0);
// const increaseAge = () => {
//   setAge(age+1);

// }
// return (
//   <div className="App"> 
//   {age}
//   <button onClick={increaseAge}> Increase age </button>
//   </div>
// )
// }
// const [inputValue, setInputValue] = useState("");

// const handleInputChange = (event) => {
//   setInputValue(event.target.value);
// }

// return <div className='App'>
//    {/* <input type="text" onChange={handleInputChange} />
//   {inputValue} */}


// </div>
// }
// function App() {
//   // const [text, showtext] = useState(false);
//   const [Text, showtext] = useState(false);


//   return (
//     <div className='App'>
//       {/* <button onClick={() => {showtext(!text);
//       }}> show/hide </button>
//       {showtext && <h1>This is my text</h1>} */}
//       {/* v predidushem primere u tebya ne poluchalos' potomu chto ty vybral ne to vmesto peremennoy ty ukazal funkciu  */}
//       <button 
//       onClick={() => {showtext(!Text);
//       }}
//       >
//         show/hide</button>
//         {Text && <h1>Show me </h1>}
//     </div>
//   )
// }



export default App;
